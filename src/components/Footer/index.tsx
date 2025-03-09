import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = '程序猿-Ubanillx';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ubanillx的博客小屋',
          title: 'Ubanillx的博客小屋',
          href: 'https://www.blog.ubanillx.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> Ubanillx的Github
            </>
          ),
          href: 'https://github.com/ubanillx',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
