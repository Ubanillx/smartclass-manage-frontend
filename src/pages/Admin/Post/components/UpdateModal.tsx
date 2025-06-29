import { updatePostUsingPut } from '@/services/backend/postController';
import { ProColumns } from '@ant-design/pro-components';
import '@umijs/max';
import { message, Modal, Form, Input, Button, Tabs, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'katex/dist/katex.min.css';
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import './style.less';

interface Props {
  oldData?: API.PostVO;
  visible: boolean;
  columns: ProColumns<API.PostVO>[];
  onSubmit: (values: API.PostUpdateRequest) => void;
  onCancel: () => void;
}

/**
 * 更新帖子
 *
 * @param fields
 */
const handleUpdate = async (fields: API.PostUpdateRequest) => {
  const hide = message.loading('正在更新');
  try {
    // 处理标签，如果是字符串，则转为数组
    if (typeof fields.tags === 'string') {
      fields.tags = (fields.tags as string).split(',').map(tag => tag.trim()).filter(Boolean);
    }
    
    await updatePostUsingPut({ id: fields.id as number }, fields);
    hide();
    message.success('更新成功');
    return true;
  } catch (error: any) {
    hide();
    message.error('更新失败，' + error.message);
    return false;
  }
};

/**
 * 更新帖子弹窗
 * @param props
 * @constructor
 */
const UpdateModal: React.FC<Props> = (props) => {
  const { oldData, visible, columns, onSubmit, onCancel } = props;
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('edit');
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // 添加键盘快捷键支持
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 仅在模态框可见时处理键盘事件
      if (!visible && !isFullscreen) return;
      
      // F11 切换全屏
      if (e.key === 'F11') {
        e.preventDefault();
        toggleFullscreen();
      }
      
      // ESC 退出全屏
      if (e.key === 'Escape' && isFullscreen) {
        e.preventDefault();
        setIsFullscreen(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, isFullscreen]);

  useEffect(() => {
    if (oldData && visible) {
      // 将标签数组转为字符串
      const formData = {
        ...oldData,
        tags: oldData.tagList ? oldData.tagList.join(',') : ''
      };
      form.setFieldsValue(formData);
      setMarkdownContent(oldData.content || '');
    }
  }, [oldData, visible, form]);

  // 提交表单
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setSubmitting(true);
      
      // 处理表单数据
      const postData: API.PostUpdateRequest = {
        id: oldData?.id,
        title: values.title,
        content: values.content,
        tags: values.tags ? values.tags.split(',').map((tag: string) => tag.trim()).filter(Boolean) : []
      };
      
      const success = await handleUpdate(postData);
      if (success) {
        setIsFullscreen(false);
        onSubmit?.(postData);
      }
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
    }
  };

  // 处理Markdown内容变化
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMarkdownContent(value);
    form.setFieldValue('content', value);
  };

  // 切换全屏模式
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // 退出全屏或取消
  const handleCancel = () => {
    if (isFullscreen) {
      setIsFullscreen(false);
    } else {
      onCancel?.();
    }
  };

  // 代码渲染组件
  const CodeBlock = ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={coldarkCold as any}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  };

  const editorContent = (
    <Form.Item
      name="content"
      label={
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <span>内容</span>
          <Button 
            type="text" 
            icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />} 
            onClick={toggleFullscreen}
            title={isFullscreen ? "按ESC退出全屏" : "全屏编辑"}
            className={`fullscreen-toggle-btn ${isFullscreen ? 'fullscreen-active' : ''}`}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              {isFullscreen ? '退出全屏' : '全屏编辑'}
              <span className="shortcut-tip">{isFullscreen ? 'Esc' : 'F11'}</span>
            </span>
          </Button>
        </div>
      }
      rules={[{ required: true, message: '请输入帖子内容' }]}
      style={{ marginBottom: isFullscreen ? 0 : 24 }}
    >
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={[
          {
            key: 'edit',
            label: '编辑',
            children: (
              <Input.TextArea 
                placeholder="请输入帖子内容，支持Markdown语法、代码高亮和数学公式" 
                rows={isFullscreen ? 20 : 12} 
                maxLength={50000} 
                showCount 
                value={markdownContent}
                onChange={handleContentChange}
                className={isFullscreen ? 'fullscreen-textarea' : ''}
              />
            ),
          },
          {
            key: 'preview',
            label: '预览',
            children: (
              <div 
                className={`markdown-preview ${isFullscreen ? 'fullscreen-preview' : ''}`}
                style={{ 
                  border: '1px solid #d9d9d9', 
                  borderRadius: '2px',
                  padding: '8px 12px',
                  minHeight: isFullscreen ? '70vh' : '290px',
                  maxHeight: isFullscreen ? '70vh' : '500px',
                  overflow: 'auto'
                }}
              >
                {markdownContent ? (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeKatex, rehypeRaw]}
                    components={{
                      code: CodeBlock
                    }}
                  >
                    {markdownContent}
                  </ReactMarkdown>
                ) : (
                  <div style={{ color: '#bfbfbf', textAlign: 'center', marginTop: '120px' }}>
                    内容预览区域
                  </div>
                )}
              </div>
            ),
          },
        ]}
      />
    </Form.Item>
  );

  if (!oldData) {
    return <></>;
  }

  // 全屏模式下的渲染
  if (isFullscreen) {
    return (
      <div className="fullscreen-editor">
        <div className="fullscreen-header">
          <div className="fullscreen-title">全屏编辑</div>
          <Space>
          </Space>
        </div>
        <div className="fullscreen-content">
          <Form
            form={form}
            layout="vertical"
          >
            {editorContent}
          </Form>
        </div>
      </div>
    );
  }

  return (
    <Modal
      destroyOnClose
      title="编辑帖子"
      open={visible}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          取消
        </Button>,
        <Button key="submit" type="primary" loading={submitting} onClick={handleSubmit}>
          更新
        </Button>,
      ]}
      width={800}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{}}
      >
        <Form.Item
          name="title"
          label="标题"
          rules={[{ required: true, message: '请输入帖子标题' }]}
        >
          <Input placeholder="请输入帖子标题" maxLength={100} />
        </Form.Item>
        
        {editorContent}
        
        <Form.Item
          name="tags"
          label="标签"
          help="多个标签请用逗号分隔，如：学习,英语,教育"
        >
          <Input placeholder="请输入标签，多个标签用逗号分隔" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateModal;
