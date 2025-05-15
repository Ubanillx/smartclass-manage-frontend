declare namespace API {
  type acceptFriendRequestUsingPOSTParams = {
    /** id */
    id: number;
  };

  type adminDeletePostCommentReplyUsingDELETEParams = {
    /** id */
    id: number;
  };

  type adminDeletePostCommentUsingDELETEParams = {
    /** id */
    id: number;
  };

  type AiAvatarAddRequest = {
    abilities?: string;
    avatarAuth?: string;
    avatarImgUrl?: string;
    baseUrl?: string;
    description?: string;
    isPublic?: number;
    name?: string;
    personality?: string;
    sort?: number;
    tags?: string;
  };

  type AiAvatarUpdateRequest = {
    abilities?: string;
    avatarAuth?: string;
    avatarImgUrl?: string;
    baseUrl?: string;
    description?: string;
    id?: number;
    isPublic?: number;
    name?: string;
    personality?: string;
    sort?: number;
    status?: number;
    tags?: string;
  };

  type AiAvatarVO = {
    abilities?: string;
    avatarImgUrl?: string;
    baseUrl?: string;
    createTime?: string;
    creatorId?: number;
    description?: string;
    id?: number;
    isPublic?: number;
    name?: string;
    personality?: string;
    rating?: number;
    ratingCount?: number;
    sort?: number;
    status?: number;
    tags?: string;
    updateTime?: string;
    usageCount?: number;
  };

  type Announcement = {
    adminId?: number;
    content?: string;
    coverImage?: string;
    createTime?: string;
    endTime?: string;
    id?: number;
    isDelete?: number;
    priority?: number;
    startTime?: string;
    status?: number;
    title?: string;
    updateTime?: string;
    viewCount?: number;
  };

  type AnnouncementAddRequest = {
    content?: string;
    coverImage?: string;
    endTime?: string;
    priority?: number;
    startTime?: string;
    status?: number;
    title?: string;
  };

  type AnnouncementUpdateRequest = {
    content?: string;
    coverImage?: string;
    endTime?: string;
    id?: number;
    priority?: number;
    startTime?: string;
    status?: number;
    title?: string;
  };

  type AnnouncementVO = {
    content?: string;
    coverImage?: string;
    createTime?: string;
    endTime?: string;
    hasRead?: boolean;
    id?: number;
    priority?: number;
    startTime?: string;
    status?: number;
    title?: string;
    viewCount?: number;
  };

  type BaseResponseAiAvatarVO_ = {
    code?: number;
    data?: AiAvatarVO;
    message?: string;
  };

  type BaseResponseAnnouncementVO_ = {
    code?: number;
    data?: AnnouncementVO;
    message?: string;
  };

  type BaseResponseArrayInt_ = {
    code?: number;
    data?: number[];
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseChatMessageVO_ = {
    code?: number;
    data?: ChatMessageVO;
    message?: string;
  };

  type BaseResponseCourse_ = {
    code?: number;
    data?: Course;
    message?: string;
  };

  type BaseResponseCourseCategory_ = {
    code?: number;
    data?: CourseCategory;
    message?: string;
  };

  type BaseResponseCourseChapter_ = {
    code?: number;
    data?: CourseChapter;
    message?: string;
  };

  type BaseResponseCourseMaterial_ = {
    code?: number;
    data?: CourseMaterial;
    message?: string;
  };

  type BaseResponseCourseReviewVO_ = {
    code?: number;
    data?: CourseReviewVO;
    message?: string;
  };

  type BaseResponseCourseSection_ = {
    code?: number;
    data?: CourseSection;
    message?: string;
  };

  type BaseResponseCourseVO_ = {
    code?: number;
    data?: CourseVO;
    message?: string;
  };

  type BaseResponseDailyArticleVO_ = {
    code?: number;
    data?: DailyArticleVO;
    message?: string;
  };

  type BaseResponseDailyWordVO_ = {
    code?: number;
    data?: DailyWordVO;
    message?: string;
  };

  type BaseResponseFriendRequestVO_ = {
    code?: number;
    data?: FriendRequestVO;
    message?: string;
  };

  type BaseResponseInt_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseListAiAvatarVO_ = {
    code?: number;
    data?: AiAvatarVO[];
    message?: string;
  };

  type BaseResponseListChatMessageVO_ = {
    code?: number;
    data?: ChatMessageVO[];
    message?: string;
  };

  type BaseResponseListChatSessionVO_ = {
    code?: number;
    data?: ChatSessionVO[];
    message?: string;
  };

  type BaseResponseListCourse_ = {
    code?: number;
    data?: Course[];
    message?: string;
  };

  type BaseResponseListCourseCategory_ = {
    code?: number;
    data?: CourseCategory[];
    message?: string;
  };

  type BaseResponseListCourseChapter_ = {
    code?: number;
    data?: CourseChapter[];
    message?: string;
  };

  type BaseResponseListCourseMaterial_ = {
    code?: number;
    data?: CourseMaterial[];
    message?: string;
  };

  type BaseResponseListCourseSection_ = {
    code?: number;
    data?: CourseSection[];
    message?: string;
  };

  type BaseResponseListCourseVO_ = {
    code?: number;
    data?: CourseVO[];
    message?: string;
  };

  type BaseResponseListFriendRelationshipVO_ = {
    code?: number;
    data?: FriendRelationshipVO[];
    message?: string;
  };

  type BaseResponseListFriendRequestVO_ = {
    code?: number;
    data?: FriendRequestVO[];
    message?: string;
  };

  type BaseResponseListLong_ = {
    code?: number;
    data?: number[];
    message?: string;
  };

  type BaseResponseListMapStringObject_ = {
    code?: number;
    data?: MapStringObject_[];
    message?: string;
  };

  type BaseResponseListPrivateChatSessionVO_ = {
    code?: number;
    data?: PrivateChatSessionVO[];
    message?: string;
  };

  type BaseResponseListTeacherVO_ = {
    code?: number;
    data?: TeacherVO[];
    message?: string;
  };

  type BaseResponseListUserAiAvatarVO_ = {
    code?: number;
    data?: UserAiAvatarVO[];
    message?: string;
  };

  type BaseResponseListUserFeedbackReplyVO_ = {
    code?: number;
    data?: UserFeedbackReplyVO[];
    message?: string;
  };

  type BaseResponseListUserWordBookVO_ = {
    code?: number;
    data?: UserWordBookVO[];
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseMapStringObject_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseMapStringString_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseObject_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageAiAvatarVO_ = {
    code?: number;
    data?: PageAiAvatarVO_;
    message?: string;
  };

  type BaseResponsePageAnnouncement_ = {
    code?: number;
    data?: PageAnnouncement_;
    message?: string;
  };

  type BaseResponsePageAnnouncementVO_ = {
    code?: number;
    data?: PageAnnouncementVO_;
    message?: string;
  };

  type BaseResponsePageChatMessageVO_ = {
    code?: number;
    data?: PageChatMessageVO_;
    message?: string;
  };

  type BaseResponsePageCourseChapter_ = {
    code?: number;
    data?: PageCourseChapter_;
    message?: string;
  };

  type BaseResponsePageCourseMaterial_ = {
    code?: number;
    data?: PageCourseMaterial_;
    message?: string;
  };

  type BaseResponsePageCourseReviewVO_ = {
    code?: number;
    data?: PageCourseReviewVO_;
    message?: string;
  };

  type BaseResponsePageCourseSection_ = {
    code?: number;
    data?: PageCourseSection_;
    message?: string;
  };

  type BaseResponsePageCourseVO_ = {
    code?: number;
    data?: PageCourseVO_;
    message?: string;
  };

  type BaseResponsePageDailyArticle_ = {
    code?: number;
    data?: PageDailyArticle_;
    message?: string;
  };

  type BaseResponsePageDailyArticleVO_ = {
    code?: number;
    data?: PageDailyArticleVO_;
    message?: string;
  };

  type BaseResponsePageDailyWord_ = {
    code?: number;
    data?: PageDailyWord_;
    message?: string;
  };

  type BaseResponsePageDailyWordVO_ = {
    code?: number;
    data?: PageDailyWordVO_;
    message?: string;
  };

  type BaseResponsePageFriendRelationship_ = {
    code?: number;
    data?: PageFriendRelationship_;
    message?: string;
  };

  type BaseResponsePageFriendRelationshipVO_ = {
    code?: number;
    data?: PageFriendRelationshipVO_;
    message?: string;
  };

  type BaseResponsePageFriendRequest_ = {
    code?: number;
    data?: PageFriendRequest_;
    message?: string;
  };

  type BaseResponsePageFriendRequestVO_ = {
    code?: number;
    data?: PageFriendRequestVO_;
    message?: string;
  };

  type BaseResponsePagePost_ = {
    code?: number;
    data?: PagePost_;
    message?: string;
  };

  type BaseResponsePagePostCommentReplyVO_ = {
    code?: number;
    data?: PagePostCommentReplyVO_;
    message?: string;
  };

  type BaseResponsePagePostCommentVO_ = {
    code?: number;
    data?: PagePostCommentVO_;
    message?: string;
  };

  type BaseResponsePagePostVO_ = {
    code?: number;
    data?: PagePostVO_;
    message?: string;
  };

  type BaseResponsePagePrivateMessageVO_ = {
    code?: number;
    data?: PagePrivateMessageVO_;
    message?: string;
  };

  type BaseResponsePageTeacher_ = {
    code?: number;
    data?: PageTeacher_;
    message?: string;
  };

  type BaseResponsePageTeacherVO_ = {
    code?: number;
    data?: PageTeacherVO_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserAiAvatarVO_ = {
    code?: number;
    data?: PageUserAiAvatarVO_;
    message?: string;
  };

  type BaseResponsePageUserFeedback_ = {
    code?: number;
    data?: PageUserFeedback_;
    message?: string;
  };

  type BaseResponsePageUserFeedbackReplyVO_ = {
    code?: number;
    data?: PageUserFeedbackReplyVO_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponsePageUserWordBookVO_ = {
    code?: number;
    data?: PageUserWordBookVO_;
    message?: string;
  };

  type BaseResponsePostCommentReplyVO_ = {
    code?: number;
    data?: PostCommentReplyVO;
    message?: string;
  };

  type BaseResponsePostCommentVO_ = {
    code?: number;
    data?: PostCommentVO;
    message?: string;
  };

  type BaseResponsePostVO_ = {
    code?: number;
    data?: PostVO;
    message?: string;
  };

  type BaseResponsePrivateChatSessionVO_ = {
    code?: number;
    data?: PrivateChatSessionVO;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseTeacher_ = {
    code?: number;
    data?: Teacher;
    message?: string;
  };

  type BaseResponseTeacherVO_ = {
    code?: number;
    data?: TeacherVO;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserAiAvatarVO_ = {
    code?: number;
    data?: UserAiAvatarVO;
    message?: string;
  };

  type BaseResponseUserDailyWord_ = {
    code?: number;
    data?: UserDailyWord;
    message?: string;
  };

  type BaseResponseUserFeedback_ = {
    code?: number;
    data?: UserFeedback;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type cancelArticleFavourUsingDELETEParams = {
    /** articleId */
    articleId: number;
  };

  type cancelArticleThumbUsingDELETEParams = {
    /** articleId */
    articleId: number;
  };

  type cancelFavourUsingDELETEParams = {
    /** postId */
    postId: number;
  };

  type cancelThumbUsingDELETEParams = {
    /** postId */
    postId: number;
  };

  type cancelThumbWordUsingDELETEParams = {
    /** wordId */
    wordId: number;
  };

  type cancelWordStudiedUsingDELETEParams = {
    /** wordId */
    wordId: number;
  };

  type ChatMessageAddRequest = {
    aiAvatarId?: number;
    content?: string;
    endChat?: boolean;
    fileIds?: string[];
    messageType?: string;
    sessionId?: string;
  };

  type ChatMessageVO = {
    aiAvatarId?: number;
    aiAvatarImgUrl?: string;
    aiAvatarName?: string;
    content?: string;
    createTime?: string;
    id?: number;
    messageType?: string;
    sessionId?: string;
    tokens?: number;
    userAvatar?: string;
    userId?: number;
    userName?: string;
  };

  type ChatSessionUpdateRequest = {
    sessionId?: string;
    sessionName?: string;
  };

  type ChatSessionVO = {
    aiAvatarId?: number;
    aiAvatarImgUrl?: string;
    aiAvatarName?: string;
    lastMessage?: string;
    lastMessageTime?: string;
    messageCount?: number;
    sessionId?: string;
    sessionName?: string;
  };

  type checkFavouredUsingGETParams = {
    /** courseId */
    courseId: number;
  };

  type checkUsingGETParams = {
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
    /** signature */
    signature?: string;
    /** timestamp */
    timestamp?: string;
  };

  type Course = {
    adminId?: number;
    categoryId?: number;
    courseType?: number;
    coverImage?: string;
    createTime?: string;
    description?: string;
    difficulty?: number;
    id?: number;
    isDelete?: number;
    objectives?: string;
    originalPrice?: number;
    price?: number;
    ratingCount?: number;
    ratingScore?: number;
    requirements?: string;
    status?: number;
    studentCount?: number;
    subtitle?: string;
    tags?: string;
    targetAudience?: string;
    teacherId?: number;
    title?: string;
    totalChapters?: number;
    totalDuration?: number;
    totalSections?: number;
    updateTime?: string;
  };

  type CourseAddRequest = {
    categoryId?: number;
    courseType?: number;
    coverImage?: string;
    description?: string;
    difficulty?: number;
    objectives?: string;
    originalPrice?: number;
    price?: number;
    requirements?: string;
    status?: number;
    subtitle?: string;
    tags?: string;
    targetAudience?: string;
    teacherId?: number;
    title?: string;
    totalChapters?: number;
    totalDuration?: number;
    totalSections?: number;
  };

  type CourseCategory = {
    adminId?: number;
    createTime?: string;
    description?: string;
    icon?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    parentId?: number;
    sort?: number;
    updateTime?: string;
  };

  type CourseChapter = {
    adminId?: number;
    courseId?: number;
    createTime?: string;
    description?: string;
    id?: number;
    isDelete?: number;
    sort?: number;
    title?: string;
    updateTime?: string;
  };

  type CourseFavourAddRequest = {
    courseId?: number;
  };

  type CourseMaterial = {
    adminId?: number;
    courseId?: number;
    createTime?: string;
    description?: string;
    downloadCount?: number;
    fileSize?: number;
    fileType?: string;
    fileUrl?: string;
    id?: number;
    isDelete?: number;
    sort?: number;
    title?: string;
    updateTime?: string;
  };

  type CourseReview = {
    adminReply?: string;
    adminReplyTime?: string;
    content?: string;
    courseId?: number;
    createTime?: string;
    id?: number;
    isDelete?: number;
    likeCount?: number;
    rating?: number;
    replyCount?: number;
    status?: number;
    updateTime?: string;
    userId?: number;
  };

  type CourseReviewVO = {
    adminReply?: string;
    adminReplyTime?: string;
    content?: string;
    courseId?: number;
    courseTitle?: string;
    createTime?: string;
    id?: number;
    likeCount?: number;
    rating?: number;
    replyCount?: number;
    status?: number;
    updateTime?: string;
    userAvatar?: string;
    userId?: number;
    userName?: string;
  };

  type CourseSection = {
    adminId?: number;
    chapterId?: number;
    courseId?: number;
    createTime?: string;
    description?: string;
    duration?: number;
    id?: number;
    isDelete?: number;
    isFree?: number;
    resourceType?: number;
    resourceUrl?: string;
    sort?: number;
    title?: string;
    updateTime?: string;
    videoUrl?: string;
  };

  type CourseUpdateRequest = {
    categoryId?: number;
    courseType?: number;
    coverImage?: string;
    description?: string;
    difficulty?: number;
    id?: number;
    objectives?: string;
    originalPrice?: number;
    price?: number;
    ratingCount?: number;
    ratingScore?: number;
    requirements?: string;
    status?: number;
    subtitle?: string;
    tags?: string;
    targetAudience?: string;
    teacherId?: number;
    title?: string;
    totalChapters?: number;
    totalDuration?: number;
    totalSections?: number;
  };

  type CourseVO = {
    buyCount?: number;
    categoryId?: number;
    courseType?: number;
    coverImage?: string;
    createTime?: string;
    description?: string;
    difficulty?: number;
    id?: number;
    objectives?: string;
    originalPrice?: number;
    price?: number;
    ratingCount?: number;
    ratingScore?: number;
    requirements?: string;
    status?: number;
    studyCount?: number;
    subtitle?: string;
    tags?: string;
    targetAudience?: string;
    teacherAvatar?: string;
    teacherId?: number;
    teacherName?: string;
    teacherVO?: UserVO;
    title?: string;
    totalChapters?: number;
    totalDuration?: number;
    totalSections?: number;
    updateTime?: string;
  };

  type createSessionUsingPOSTParams = {
    /** aiAvatarId */
    aiAvatarId: number;
  };

  type DailyArticle = {
    adminId?: number;
    author?: string;
    category?: string;
    content?: string;
    coverImage?: string;
    createTime?: string;
    difficulty?: number;
    id?: number;
    isDelete?: number;
    likeCount?: number;
    publishDate?: string;
    readTime?: number;
    source?: string;
    sourceUrl?: string;
    summary?: string;
    tags?: string;
    title?: string;
    updateTime?: string;
    viewCount?: number;
  };

  type DailyArticleAddRequest = {
    author?: string;
    category?: string;
    content?: string;
    coverImage?: string;
    difficulty?: number;
    publishDate?: string;
    readTime?: number;
    source?: string;
    sourceUrl?: string;
    summary?: string;
    tags?: string;
    title?: string;
  };

  type DailyArticleQueryRequest = {
    adminId?: number;
    author?: string;
    category?: string;
    content?: string;
    createTime?: string;
    current?: number;
    difficulty?: number;
    id?: number;
    maxReadTime?: number;
    minReadTime?: number;
    minViewCount?: number;
    pageSize?: number;
    publishDateEnd?: string;
    publishDateStart?: string;
    sortField?: string;
    sortOrder?: string;
    source?: string;
    summary?: string;
    tags?: string;
    title?: string;
  };

  type DailyArticleUpdateRequest = {
    author?: string;
    category?: string;
    content?: string;
    coverImage?: string;
    difficulty?: number;
    id?: number;
    likeCount?: number;
    publishDate?: string;
    readTime?: number;
    source?: string;
    sourceUrl?: string;
    summary?: string;
    tags?: string;
    title?: string;
    viewCount?: number;
  };

  type DailyArticleVO = {
    author?: string;
    category?: string;
    content?: string;
    coverImage?: string;
    createTime?: string;
    difficulty?: number;
    id?: number;
    likeCount?: number;
    publishDate?: string;
    readTime?: number;
    source?: string;
    sourceUrl?: string;
    summary?: string;
    tags?: string;
    title?: string;
    viewCount?: number;
  };

  type DailyWord = {
    adminId?: number;
    audioUrl?: string;
    category?: string;
    createTime?: string;
    difficulty?: number;
    example?: string;
    exampleTranslation?: string;
    id?: number;
    isDelete?: number;
    likeCount?: number;
    notes?: string;
    pronunciation?: string;
    publishDate?: string;
    translation?: string;
    updateTime?: string;
    word?: string;
  };

  type DailyWordAddRequest = {
    audioUrl?: string;
    category?: string;
    difficulty?: number;
    example?: string;
    exampleTranslation?: string;
    notes?: string;
    pronunciation?: string;
    publishDate?: string;
    translation?: string;
    word?: string;
  };

  type DailyWordUpdateRequest = {
    audioUrl?: string;
    category?: string;
    difficulty?: number;
    example?: string;
    exampleTranslation?: string;
    id?: number;
    notes?: string;
    pronunciation?: string;
    publishDate?: string;
    translation?: string;
    word?: string;
  };

  type DailyWordVO = {
    audioUrl?: string;
    category?: string;
    createTime?: string;
    difficulty?: number;
    example?: string;
    exampleTranslation?: string;
    id?: number;
    likeCount?: number;
    notes?: string;
    pronunciation?: string;
    publishDate?: string;
    translation?: string;
    word?: string;
  };

  type deleteAiAvatarUsingDELETEParams = {
    /** id */
    id: number;
  };

  type deleteAnnouncementUsingDELETEParams = {
    /** id */
    id: number;
  };

  type deleteChapterUsingPOSTParams = {
    /** id */
    id: number;
  };

  type deleteDailyArticleUsingDELETEParams = {
    /** id */
    id: number;
  };

  type deleteDailyWordUsingDELETEParams = {
    /** id */
    id: number;
  };

  type deleteFriendByUserIdUsingDELETEParams = {
    /** userId */
    userId: number;
  };

  type deleteFriendRelationshipUsingDELETEParams = {
    /** id */
    id: number;
  };

  type deleteFriendRequestUsingDELETEParams = {
    /** id */
    id: number;
  };

  type deletePostCommentReplyUsingDELETEParams = {
    /** id */
    id: number;
  };

  type deletePostCommentUsingDELETEParams = {
    /** id */
    id: number;
  };

  type deletePostUsingDELETEParams = {
    /** id */
    id: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type DeleteRequest1 = {
    id?: number;
  };

  type deleteReviewUsingPOSTParams = {
    /** id */
    id: number;
  };

  type deleteSessionUsingPOSTParams = {
    /** sessionId */
    sessionId: string;
  };

  type deleteUserFeedbackUsingDELETEParams = {
    /** id */
    id: number;
  };

  type doArticleFavourUsingPOSTParams = {
    /** articleId */
    articleId: number;
  };

  type editPostUsingPUTParams = {
    /** id */
    id: number;
  };

  type favoriteAiAvatarUsingPOSTParams = {
    /** aiAvatarId */
    aiAvatarId: number;
    /** isFavorite */
    isFavorite: number;
  };

  type FriendRelationship = {
    createTime?: string;
    id?: number;
    status?: string;
    updateTime?: string;
    userId1?: number;
    userId2?: number;
  };

  type FriendRelationshipAddRequest = {
    status?: string;
    userId2?: number;
  };

  type FriendRelationshipUpdateRequest = {
    id?: number;
    status?: string;
    userId?: number;
  };

  type FriendRelationshipVO = {
    createTime?: string;
    friendUser?: UserVO;
    id?: number;
    status?: string;
    updateTime?: string;
    userId1?: number;
    userId2?: number;
  };

  type FriendRequest = {
    createTime?: string;
    id?: number;
    message?: string;
    receiverId?: number;
    senderId?: number;
    status?: string;
    updateTime?: string;
  };

  type FriendRequestAddRequest = {
    message?: string;
    receiverId?: number;
    senderId?: number;
    status?: string;
  };

  type FriendRequestQueryRequest = {
    current?: number;
    message?: string;
    pageSize?: number;
    receiverId?: number;
    senderId?: number;
    sortField?: string;
    sortOrder?: string;
    status?: string;
  };

  type FriendRequestVO = {
    createTime?: string;
    id?: number;
    message?: string;
    receiverId?: number;
    receiverUser?: UserVO;
    senderId?: number;
    senderUser?: UserVO;
    status?: string;
    statusDescription?: string;
    updateTime?: string;
  };

  type getAiAvatarByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getAnnouncementVOByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getCategoryByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getCategoryWithChildrenUsingGETParams = {
    /** categoryId */
    categoryId: number;
  };

  type getChapterByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getChatHistoryUsingGETParams = {
    /** sessionId */
    sessionId: string;
  };

  type getCourseByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getCoursesByTeacherUsingGETParams = {
    /** teacherId */
    teacherId: number;
  };

  type getCourseVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getDailyArticleVOByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getDailyWordVOByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getFriendRelationshipUsingGETParams = {
    /** id */
    id?: number;
    /** userId */
    userId?: number;
  };

  type getFriendRequestByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getMaterialByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getPostCommentByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getPostCommentReplyByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getPostVOByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getRatingStatsUsingGETParams = {
    /** courseId */
    courseId: number;
  };

  type getReceivedFriendRequestsUsingGETParams = {
    /** status */
    status?: string;
  };

  type getRecentSessionsUsingGETParams = {
    /** limit */
    limit?: number;
  };

  type getRecommendCoursesUsingGETParams = {
    /** categoryId */
    categoryId?: number;
    /** difficulty */
    difficulty?: number;
    /** limit */
    limit?: number;
  };

  type getRecommendTeachersUsingGETParams = {
    /** expertise */
    expertise?: string;
  };

  type getReviewByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getSectionByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getSectionCountUsingGETParams = {
    /** courseId */
    courseId: number;
  };

  type getSentFriendRequestsUsingGETParams = {
    /** status */
    status?: string;
  };

  type getSessionUnreadCountUsingGETParams = {
    /** sessionId */
    sessionId: number;
  };

  type getSessionWithUserUsingGETParams = {
    /** targetUserId */
    targetUserId: number;
  };

  type getSubCategoriesUsingGETParams = {
    /** parentId */
    parentId: number;
  };

  type getTeacherByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getTeacherCoursesUsingGETParams = {
    /** teacherId */
    teacherId: number;
  };

  type getTeacherVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getTodayWordUsingGETParams = {
    /** difficulty */
    difficulty?: number;
  };

  type getTotalDurationUsingGETParams = {
    /** courseId */
    courseId: number;
  };

  type getUserAiAvatarByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserChatMessagesUsingGETParams = {
    /** aiAvatarId */
    aiAvatarId?: number;
  };

  type getUserDailyWordUsingGETParams = {
    /** wordId */
    wordId: number;
  };

  type getUserFeedbackByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getUserHistoryPageUsingGETParams = {
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  };

  type getUserSessionsUsingGETParams = {
    /** aiAvatarId */
    aiAvatarId?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserWordBookListUsingGETParams = {
    /** isCollected */
    isCollected?: number;
    /** learningStatus */
    learningStatus?: number;
  };

  type hasFavourUsingGETParams = {
    /** postId */
    postId: number;
  };

  type hasReadAnnouncementUsingGETParams = {
    /** id */
    id: number;
  };

  type hasThumbUsingGETParams = {
    /** postId */
    postId: number;
  };

  type incrementDownloadCountUsingPOSTParams = {
    /** materialId */
    materialId?: number;
  };

  type isFavourArticleUsingGETParams = {
    /** articleId */
    articleId: number;
  };

  type isThumbArticleUsingGETParams = {
    /** articleId */
    articleId: number;
  };

  type isThumbWordUsingGETParams = {
    /** wordId */
    wordId: number;
  };

  type isWordInUserBookUsingGETParams = {
    /** wordId */
    wordId: number;
  };

  type likeReviewUsingPOSTParams = {
    /** reviewId */
    reviewId: number;
  };

  type listAiAvatarByPageUsingGETParams = {
    abilities?: string;
    adminId?: number;
    avatarUrl?: string;
    category?: string;
    createTime?: string;
    creatorId?: number;
    current?: number;
    description?: string;
    id?: number;
    isPublic?: number;
    modelType?: string;
    name?: string;
    pageSize?: number;
    personality?: string;
    rating?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    tags?: string;
    usageCount?: number;
  };

  type listAiAvatarUsingGETParams = {
    abilities?: string;
    adminId?: number;
    avatarUrl?: string;
    category?: string;
    createTime?: string;
    creatorId?: number;
    current?: number;
    description?: string;
    id?: number;
    isPublic?: number;
    modelType?: string;
    name?: string;
    pageSize?: number;
    personality?: string;
    rating?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    tags?: string;
    usageCount?: number;
  };

  type listAnnouncementByPageUsingGETParams = {
    adminId?: number;
    content?: string;
    coverImage?: string;
    createTime?: string;
    current?: number;
    endTime?: string;
    id?: number;
    isValid?: boolean;
    pageSize?: number;
    priority?: number;
    sortField?: string;
    sortOrder?: string;
    startTime?: string;
    status?: number;
    title?: string;
  };

  type listAnnouncementVOByPageUsingGETParams = {
    adminId?: number;
    content?: string;
    coverImage?: string;
    createTime?: string;
    current?: number;
    endTime?: string;
    id?: number;
    isValid?: boolean;
    pageSize?: number;
    priority?: number;
    sortField?: string;
    sortOrder?: string;
    startTime?: string;
    status?: number;
    title?: string;
  };

  type listChaptersByPageUsingGETParams = {
    /** courseId */
    courseId: number;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  };

  type listChaptersUsingGETParams = {
    /** courseId */
    courseId: number;
  };

  type listCourseUsingGETParams = {
    categoryId?: number;
    courseType?: number;
    createTime?: string;
    current?: number;
    difficulty?: number;
    id?: number;
    maxPrice?: number;
    minPrice?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    tags?: string;
    teacherId?: number;
    title?: string;
    updateTime?: string;
    userId?: number;
  };

  type listCourseVOByPageUsingGETParams = {
    categoryId?: number;
    courseType?: number;
    createTime?: string;
    current?: number;
    difficulty?: number;
    id?: number;
    maxPrice?: number;
    minPrice?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    tags?: string;
    teacherId?: number;
    title?: string;
    updateTime?: string;
    userId?: number;
  };

  type listDailyArticleByPageUsingGETParams = {
    adminId?: number;
    author?: string;
    category?: string;
    content?: string;
    createTime?: string;
    current?: number;
    difficulty?: number;
    id?: number;
    maxReadTime?: number;
    minReadTime?: number;
    minViewCount?: number;
    pageSize?: number;
    publishDateEnd?: string;
    publishDateStart?: string;
    sortField?: string;
    sortOrder?: string;
    source?: string;
    summary?: string;
    tags?: string;
    title?: string;
  };

  type listDailyArticleVOByPageUsingGETParams = {
    adminId?: number;
    author?: string;
    category?: string;
    content?: string;
    createTime?: string;
    current?: number;
    difficulty?: number;
    id?: number;
    maxReadTime?: number;
    minReadTime?: number;
    minViewCount?: number;
    pageSize?: number;
    publishDateEnd?: string;
    publishDateStart?: string;
    sortField?: string;
    sortOrder?: string;
    source?: string;
    summary?: string;
    tags?: string;
    title?: string;
  };

  type listDailyWordByPageUsingGETParams = {
    adminId?: number;
    category?: string;
    createTime?: string;
    current?: number;
    difficulty?: number;
    id?: number;
    pageSize?: number;
    publishDateEnd?: string;
    publishDateStart?: string;
    sortField?: string;
    sortOrder?: string;
    translation?: string;
    word?: string;
  };

  type listDailyWordVOByPageUsingGETParams = {
    adminId?: number;
    category?: string;
    createTime?: string;
    current?: number;
    difficulty?: number;
    id?: number;
    pageSize?: number;
    publishDateEnd?: string;
    publishDateStart?: string;
    sortField?: string;
    sortOrder?: string;
    translation?: string;
    word?: string;
  };

  type listFriendRelationshipByPageUsingGETParams = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: string;
    userId?: number;
    userId1?: number;
    userId2?: number;
  };

  type listFriendRelationshipVOByPageUsingGETParams = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: string;
    userId?: number;
    userId1?: number;
    userId2?: number;
  };

  type listMaterialsByCourseUsingGETParams = {
    /** courseId */
    courseId?: number;
  };

  type listMaterialsByPageUsingGETParams = {
    /** courseId */
    courseId?: number;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  };

  type listMyCourseVOByPageUsingGETParams = {
    categoryId?: number;
    courseType?: number;
    createTime?: string;
    current?: number;
    difficulty?: number;
    id?: number;
    maxPrice?: number;
    minPrice?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    tags?: string;
    teacherId?: number;
    title?: string;
    updateTime?: string;
    userId?: number;
  };

  type listMyFavourPostByPageUsingGETParams = {
    content?: string;
    current?: number;
    favourUserId?: number;
    id?: number;
    notId?: number;
    orTags?: string[];
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    tags?: string[];
    title?: string;
    userId?: number;
  };

  type listMyPostVOByPageUsingGETParams = {
    content?: string;
    current?: number;
    favourUserId?: number;
    id?: number;
    notId?: number;
    orTags?: string[];
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    tags?: string[];
    title?: string;
    userId?: number;
  };

  type listMyThumbArticleByPageUsingGETParams = {
    adminId?: number;
    author?: string;
    category?: string;
    content?: string;
    createTime?: string;
    current?: number;
    difficulty?: number;
    id?: number;
    maxReadTime?: number;
    minReadTime?: number;
    minViewCount?: number;
    pageSize?: number;
    publishDateEnd?: string;
    publishDateStart?: string;
    sortField?: string;
    sortOrder?: string;
    source?: string;
    summary?: string;
    tags?: string;
    title?: string;
  };

  type listMyUserAiAvatarsByPageUsingGETParams = {
    aiAvatarId?: number;
    createTime?: string;
    current?: number;
    id?: number;
    isFavorite?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
    userRating?: number;
  };

  type listPostByPageUsingGETParams = {
    content?: string;
    current?: number;
    favourUserId?: number;
    id?: number;
    notId?: number;
    orTags?: string[];
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    tags?: string[];
    title?: string;
    userId?: number;
  };

  type listPostCommentByPageUsingGETParams = {
    content?: string;
    current?: number;
    pageSize?: number;
    postId?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type listPostCommentReplyByPageUsingGETParams = {
    commentId?: number;
    content?: string;
    current?: number;
    pageSize?: number;
    postId?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type listPostVOByPageUsingGETParams = {
    content?: string;
    current?: number;
    favourUserId?: number;
    id?: number;
    notId?: number;
    orTags?: string[];
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    tags?: string[];
    title?: string;
    userId?: number;
  };

  type listRepliesUsingGETParams = {
    /** feedbackId */
    feedbackId: number;
  };

  type listReplyByPageUsingGETParams = {
    current?: number;
    feedbackId?: number;
    isRead?: number;
    pageSize?: number;
    senderId?: number;
    senderRole?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type listReviewsByPageUsingGETParams = {
    /** courseId */
    courseId: number;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  };

  type listSectionsByChapterIdUsingGETParams = {
    /** chapterId */
    chapterId: number;
  };

  type listSectionsByCourseIdUsingGETParams = {
    /** courseId */
    courseId: number;
  };

  type listSectionsByPageUsingGETParams = {
    /** chapterId */
    chapterId?: number;
    /** courseId */
    courseId?: number;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  };

  type listSessionMessagesUsingGETParams = {
    /** current */
    current?: number;
    /** sessionId */
    sessionId: number;
    /** size */
    size?: number;
  };

  type listUserFeedbackByPageUsingGETParams = {
    current?: number;
    feedbackType?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    title?: string;
    userId?: number;
  };

  type listUserSessionsUsingGETParams = {
    /** userId */
    userId?: number;
  };

  type listUserWordBookByPageUsingGETParams = {
    createTime?: string;
    createTimeEnd?: string;
    createTimeStart?: string;
    current?: number;
    difficulty?: number;
    id?: number;
    isCollected?: number;
    learningStatus?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
    word?: string;
    wordId?: number;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type MapStringObject_ = true;

  type MapStringString_ = true;

  type markAsReadUsingPUTParams = {
    /** replyId */
    replyId: number;
  };

  type markMessageAsReadUsingPOSTParams = {
    /** messageId */
    messageId: number;
    /** sessionId */
    sessionId?: string;
  };

  type markMessagesAsReadUsingPOSTParams = {
    /** sessionId */
    sessionId?: string;
  };

  type markSessionMessagesAsReadUsingPOSTParams = {
    /** sessionId */
    sessionId: number;
  };

  type markWordAsStudiedUsingPOSTParams = {
    /** wordId */
    wordId: number;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageAiAvatarVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: AiAvatarVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageAnnouncement_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Announcement[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageAnnouncementVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: AnnouncementVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageChatMessageVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ChatMessageVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCourseChapter_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CourseChapter[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCourseMaterial_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CourseMaterial[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCourseReviewVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CourseReviewVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCourseSection_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CourseSection[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCourseVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CourseVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageDailyArticle_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: DailyArticle[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageDailyArticleVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: DailyArticleVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageDailyWord_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: DailyWord[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageDailyWordVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: DailyWordVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageFriendRelationship_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: FriendRelationship[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageFriendRelationshipVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: FriendRelationshipVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageFriendRequest_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: FriendRequest[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageFriendRequestVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: FriendRequestVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePost_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Post[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePostCommentReplyVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: PostCommentReplyVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePostCommentVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: PostCommentVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePostVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: PostVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePrivateMessageVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: PrivateMessageVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageTeacher_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Teacher[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageTeacherVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: TeacherVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserAiAvatarVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserAiAvatarVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserFeedback_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserFeedback[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserFeedbackReplyVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserFeedbackReplyVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserWordBookVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserWordBookVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type Post = {
    city?: string;
    commentNum?: number;
    content?: string;
    country?: string;
    createTime?: string;
    favourNum?: number;
    id?: number;
    isDelete?: number;
    tags?: string;
    thumbNum?: number;
    title?: string;
    type?: string;
    updateTime?: string;
    userId?: number;
  };

  type PostAddRequest = {
    clientIp?: string;
    content?: string;
    tags?: string[];
    title?: string;
    type?: string;
  };

  type PostCommentAddRequest = {
    clientIp?: string;
    content?: string;
    postId?: number;
  };

  type PostCommentReplyAddRequest = {
    clientIp?: string;
    commentId?: number;
    content?: string;
    postId?: number;
  };

  type PostCommentReplyVO = {
    city?: string;
    commentId?: number;
    content?: string;
    country?: string;
    createTime?: string;
    id?: number;
    postId?: number;
    userId?: number;
    userVO?: UserVO;
  };

  type PostCommentVO = {
    city?: string;
    content?: string;
    country?: string;
    createTime?: string;
    id?: number;
    postId?: number;
    userId?: number;
    userVO?: UserVO;
  };

  type PostEditRequest = {
    clientIp?: string;
    content?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostFavourAddRequest = {
    postId?: number;
  };

  type PostThumbAddRequest = {
    postId?: number;
  };

  type PostUpdateRequest = {
    content?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostVO = {
    city?: string;
    commentNum?: number;
    content?: string;
    country?: string;
    createTime?: string;
    favourNum?: number;
    hasFavour?: boolean;
    hasThumb?: boolean;
    id?: number;
    tagList?: string[];
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type PrivateChatSessionAddRequest = {
    userId1?: number;
    userId2?: number;
  };

  type PrivateChatSessionVO = {
    createTime?: string;
    id?: number;
    lastMessage?: PrivateMessageVO;
    lastMessageTime?: string;
    targetUser?: UserVO;
    unreadCount?: number;
    updateTime?: string;
    user1?: UserVO;
    user2?: UserVO;
    userId1?: number;
    userId2?: number;
  };

  type PrivateMessageAddRequest = {
    content?: string;
    receiverId?: number;
  };

  type PrivateMessageVO = {
    content?: string;
    createTime?: string;
    id?: number;
    isRead?: number;
    receiverId?: number;
    receiverUser?: UserVO;
    senderId?: number;
    senderUser?: UserVO;
  };

  type processAndReplyUsingPOSTParams = {
    /** id */
    id: number;
  };

  type processUserFeedbackUsingPUTParams = {
    /** id */
    id: number;
  };

  type rateAiAvatarUsingPOSTParams = {
    /** aiAvatarId */
    aiAvatarId: number;
    /** feedback */
    feedback?: string;
    /** rating */
    rating: number;
  };

  type rateCourseUsingPOSTParams = {
    /** id */
    id: number;
    /** score */
    score: number;
  };

  type readAnnouncementUsingPOSTParams = {
    /** id */
    id: number;
  };

  type rejectFriendRequestUsingPOSTParams = {
    /** id */
    id: number;
  };

  type removeFromWordBookUsingDELETEParams = {
    /** wordId */
    wordId: number;
  };

  type replyReviewUsingPOSTParams = {
    /** replyContent */
    replyContent: string;
    /** reviewId */
    reviewId: number;
  };

  type saveWordNoteUsingPOSTParams = {
    /** noteContent */
    noteContent: string;
    /** wordId */
    wordId: number;
  };

  type searchDailyArticleUsingGETParams = {
    /** searchText */
    searchText: string;
  };

  type searchDailyWordUsingGETParams = {
    /** searchText */
    searchText: string;
  };

  type searchPostVOByPageUsingGETParams = {
    /** searchText */
    searchText?: string;
  };

  type sendSystemNotificationUsingPOSTParams = {
    /** content */
    content: string;
    /** data */
    data?: Record<string, any>;
    /** userId */
    userId?: number;
  };

  type SseEmitter = {
    timeout?: number;
  };

  type StopStreamingRequest = {
    aiAvatarId?: number;
    taskId?: string;
  };

  type Teacher = {
    adminId?: number;
    avatar?: string;
    createTime?: string;
    expertise?: string;
    id?: number;
    introduction?: string;
    isDelete?: number;
    name?: string;
    title?: string;
    updateTime?: string;
    userId?: number;
  };

  type TeacherAddRequest = {
    avatar?: string;
    expertise?: string;
    introduction?: string;
    name?: string;
    title?: string;
    userId?: number;
  };

  type TeacherQueryRequest = {
    adminId?: number;
    current?: number;
    expertise?: string;
    id?: number;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    title?: string;
    userId?: number;
  };

  type TeacherUpdateRequest = {
    avatar?: string;
    expertise?: string;
    id?: number;
    introduction?: string;
    name?: string;
    title?: string;
    userId?: number;
  };

  type TeacherVO = {
    avatar?: string;
    averageRating?: number;
    courseCount?: number;
    createTime?: string;
    expertise?: string;
    id?: number;
    introduction?: string;
    name?: string;
    studentCount?: number;
    title?: string;
    userVO?: UserVO;
  };

  type thumbArticleUsingPOSTParams = {
    /** articleId */
    articleId: number;
  };

  type thumbWordUsingPOSTParams = {
    /** wordId */
    wordId: number;
  };

  type unfavourCourseUsingPOSTParams = {
    /** courseId */
    courseId: number;
  };

  type updateAiAvatarUsingPUTParams = {
    /** id */
    id: number;
  };

  type updateAnnouncementUsingPUTParams = {
    /** id */
    id: number;
  };

  type updateDailyArticleUsingPUTParams = {
    /** id */
    id: number;
  };

  type updateDailyWordUsingPUTParams = {
    /** id */
    id: number;
  };

  type updateDifficultyUsingPUTParams = {
    /** wordId */
    wordId: number;
  };

  type updateLearningStatusUsingPUTParams = {
    /** wordId */
    wordId: number;
  };

  type updateMasteryLevelUsingPOSTParams = {
    /** masteryLevel */
    masteryLevel: number;
    /** wordId */
    wordId: number;
  };

  type updateMaterialFileUsingPOSTParams = {
    /** materialId */
    materialId: number;
  };

  type updatePostUsingPUTParams = {
    /** id */
    id: number;
  };

  type updateReviewStatusUsingPOSTParams = {
    /** reviewId */
    reviewId: number;
    /** status */
    status: number;
  };

  type updateSectionVideoUsingPOSTParams = {
    /** sectionId */
    sectionId: number;
  };

  type updateUserFeedbackUsingPUTParams = {
    /** id */
    id: number;
  };

  type uploadAndAddMaterialUsingPOSTParams = {
    /** courseId */
    courseId: number;
    /** description */
    description?: string;
    /** title */
    title: string;
  };

  type uploadVideoAndAddSectionUsingPOSTParams = {
    chapterId?: number;
    courseId?: number;
    description?: string;
    sectionId?: number;
    sort?: number;
    title?: string;
  };

  type useAiAvatarUsingPOSTParams = {
    /** aiAvatarId */
    aiAvatarId: number;
  };

  type User = {
    birthday?: string;
    city?: string;
    createTime?: string;
    district?: string;
    id?: number;
    isDelete?: number;
    mpOpenId?: string;
    province?: string;
    unionId?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userName?: string;
    userPassword?: string;
    userPhone?: string;
    userProfile?: string;
    userRole?: string;
    wechatId?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userName?: string;
    userRole?: string;
  };

  type UserAiAvatarAddRequest = {
    aiAvatarId?: number;
    customSettings?: string;
    isFavorite?: number;
    userFeedback?: string;
    userId?: number;
    userRating?: number;
  };

  type UserAiAvatarUpdateRequest = {
    customSettings?: string;
    id?: number;
    isFavorite?: number;
    userFeedback?: string;
    userRating?: number;
  };

  type UserAiAvatarVO = {
    aiAvatarDescription?: string;
    aiAvatarId?: number;
    aiAvatarImgUrl?: string;
    aiAvatarName?: string;
    createTime?: string;
    customSettings?: string;
    id?: number;
    isFavorite?: number;
    lastUseTime?: string;
    updateTime?: string;
    useCount?: number;
    userAvatar?: string;
    userFeedback?: string;
    userId?: number;
    userName?: string;
    userRating?: number;
  };

  type UserDailyWord = {
    createTime?: string;
    id?: number;
    isLiked?: number;
    isStudied?: number;
    likeTime?: string;
    masteryLevel?: number;
    noteContent?: string;
    noteTime?: string;
    studyTime?: string;
    updateTime?: string;
    userId?: number;
    wordId?: number;
  };

  type UserFeedback = {
    adminId?: number;
    attachment?: string;
    content?: string;
    createTime?: string;
    feedbackType?: string;
    id?: number;
    isDelete?: number;
    processTime?: string;
    status?: number;
    title?: string;
    updateTime?: string;
    userId?: number;
  };

  type UserFeedbackAddRequest = {
    attachment?: string;
    content?: string;
    feedbackType?: string;
    title?: string;
  };

  type UserFeedbackProcessRequest = {
    id?: number;
    status?: number;
  };

  type UserFeedbackReplyAddRequest = {
    attachment?: string;
    content?: string;
    feedbackId?: number;
  };

  type UserFeedbackReplyVO = {
    attachment?: string;
    content?: string;
    createTime?: string;
    feedbackId?: number;
    id?: number;
    isRead?: number;
    sender?: UserVO;
    senderId?: number;
    senderRole?: number;
  };

  type UserFeedbackUpdateRequest = {
    attachment?: string;
    content?: string;
    feedbackType?: string;
    id?: number;
    title?: string;
  };

  type UserLoginByPhoneRequest = {
    userPassword?: string;
    userPhone?: string;
  };

  type userLoginByWxOpenUsingGETParams = {
    /** code */
    code: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    birthdayYear?: number;
    current?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userAccount?: string;
    userEmail?: string;
    userGender?: number;
    userName?: string;
    userPhone?: string;
    userRole?: string;
    wechatId?: string;
  };

  type UserRegisterByPhoneRequest = {
    checkPassword?: string;
    userPassword?: string;
    userPhone?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    birthday?: string;
    city?: string;
    district?: string;
    province?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userName?: string;
    userPassword?: string;
    userPhone?: string;
    userProfile?: string;
    userRole?: string;
    wechatId?: string;
  };

  type UserUpdateRequest = {
    birthday?: string;
    city?: string;
    district?: string;
    id?: number;
    province?: string;
    role?: number;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userName?: string;
    userPassword?: string;
    userPhone?: string;
    userProfile?: string;
    userRole?: string;
    wechatId?: string;
  };

  type UserVO = {
    birthdayYear?: number;
    city?: string;
    createTime?: string;
    id?: number;
    province?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserWordBookAddRequest = {
    difficulty?: number;
    wordId?: number;
  };

  type UserWordBookUpdateDifficultyRequest = {
    difficulty?: number;
    wordId?: number;
  };

  type UserWordBookUpdateStatusRequest = {
    learningStatus?: number;
    wordId?: number;
  };

  type UserWordBookVO = {
    collectedTime?: string;
    createTime?: string;
    difficulty?: number;
    example?: string;
    id?: number;
    isCollected?: number;
    isDeleted?: number;
    learningStatus?: number;
    phonetic?: string;
    pronunciation?: string;
    translation?: string;
    updateTime?: string;
    userId?: number;
    word?: string;
    wordId?: number;
  };
}
