declare namespace API {
  type addUserBadgeByAdminUsingPOSTParams = {
    /** count */
    count?: number;
    /** userId */
    userId: number;
  };

  type addUserExperienceByAdminUsingPOSTParams = {
    /** experience */
    experience: number;
    /** userId */
    userId: number;
  };

  type addUserPointsByAdminUsingPOSTParams = {
    /** points */
    points: number;
    /** userId */
    userId: number;
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

  type AnnouncementQueryRequest = {
    adminId?: number;
    content?: string;
    coverImage?: string;
    createTime?: string;
    current?: number;
    endTime?: string;
    id?: number;
    pageSize?: number;
    priority?: number;
    sortField?: string;
    sortOrder?: string;
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

  type BaseResponseListUserLevelVO_ = {
    code?: number;
    data?: UserLevelVO[];
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

  type BaseResponsePagePost_ = {
    code?: number;
    data?: PagePost_;
    message?: string;
  };

  type BaseResponsePagePostVO_ = {
    code?: number;
    data?: PagePostVO_;
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

  type BaseResponsePageUserLearningRecordVO_ = {
    code?: number;
    data?: PageUserLearningRecordVO_;
    message?: string;
  };

  type BaseResponsePageUserLevel_ = {
    code?: number;
    data?: PageUserLevel_;
    message?: string;
  };

  type BaseResponsePageUserLevelVO_ = {
    code?: number;
    data?: PageUserLevelVO_;
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

  type BaseResponsePostVO_ = {
    code?: number;
    data?: PostVO;
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

  type BaseResponseUserLearningRecordVO_ = {
    code?: number;
    data?: UserLearningRecordVO;
    message?: string;
  };

  type BaseResponseUserLearningStats_ = {
    code?: number;
    data?: UserLearningStats;
    message?: string;
  };

  type BaseResponseUserLevel_ = {
    code?: number;
    data?: UserLevel;
    message?: string;
  };

  type BaseResponseUserLevelVO_ = {
    code?: number;
    data?: UserLevelVO;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
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

  type DailyWordQueryRequest = {
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

  type deleteChapterUsingPOSTParams = {
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

  type doArticleFavourUsingPOSTParams = {
    /** articleId */
    articleId: number;
  };

  type doArticleThumbUsingPOSTParams = {
    /** articleId */
    articleId: number;
  };

  type doWordFavourUsingPOSTParams = {
    /** wordId */
    wordId: number;
  };

  type doWordThumbUsingPOSTParams = {
    /** wordId */
    wordId: number;
  };

  type favoriteAiAvatarUsingPOSTParams = {
    /** aiAvatarId */
    aiAvatarId: number;
    /** isFavorite */
    isFavorite: number;
  };

  type getAiAvatarByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getAnnouncementVOByIdUsingGETParams = {
    /** id */
    id?: number;
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
    id?: number;
  };

  type getDailyWordVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getMaterialByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getMyDailyLearningStatsUsingGETParams = {
    /** endDate */
    endDate?: string;
    /** startDate */
    startDate?: string;
  };

  type getMyLearningCountStatsUsingGETParams = {
    /** endDate */
    endDate?: string;
    /** startDate */
    startDate?: string;
  };

  type getMyLearningDurationStatsUsingGETParams = {
    /** endDate */
    endDate?: string;
    /** startDate */
    startDate?: string;
  };

  type getMyPointsAndExperienceStatsUsingGETParams = {
    /** endDate */
    endDate?: string;
    /** startDate */
    startDate?: string;
  };

  type getNextUserLevelUsingGETParams = {
    /** currentLevel */
    currentLevel?: number;
  };

  type getPostVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getRandomWordUsingGETParams = {
    /** difficulty */
    difficulty?: number;
  };

  type getRatingStatsUsingGETParams = {
    /** courseId */
    courseId: number;
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

  type getUserHistoryPageUsingGETParams = {
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  };

  type getUserLearningRecordByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserLearningStatsByAdminUsingGETParams = {
    /** userId */
    userId: number;
  };

  type getUserLevelByExperienceUsingGETParams = {
    /** experience */
    experience?: number;
  };

  type getUserLevelByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserLevelVOByIdUsingGETParams = {
    /** id */
    id?: number;
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

  type hasReadAnnouncementUsingGETParams = {
    /** id */
    id: number;
  };

  type incrementDownloadCountUsingPOSTParams = {
    /** materialId */
    materialId?: number;
  };

  type initUserLearningStatsByAdminUsingPOSTParams = {
    /** userId */
    userId: number;
  };

  type isFavourArticleUsingGETParams = {
    /** articleId */
    articleId: number;
  };

  type isFavourWordUsingGETParams = {
    /** wordId */
    wordId: number;
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

  type listValidAnnouncementsUsingGETParams = {
    /** current */
    current?: number;
    /** size */
    size?: number;
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

  type MapStringObject_1 = true;

  type MapStringObject_2 = true;

  type markWordAsStudiedUsingPOST1Params = {
    /** wordId */
    wordId: number;
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

  type PageUserLearningRecordVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserLearningRecordVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserLevel_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserLevel[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserLevelVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserLevelVO[];
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
    content?: string;
    createTime?: string;
    favourNum?: number;
    id?: number;
    isDelete?: number;
    tags?: string;
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    userId?: number;
  };

  type PostAddRequest = {
    content?: string;
    tags?: string[];
    title?: string;
  };

  type PostEditRequest = {
    content?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostFavourAddRequest = {
    postId?: number;
  };

  type PostFavourQueryRequest = {
    current?: number;
    pageSize?: number;
    postQueryRequest?: PostQueryRequest;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type PostQueryRequest = {
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
    content?: string;
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

  type recordCourseStudyUsingPOSTParams = {
    /** courseId */
    courseId: number;
    /** duration */
    duration: number;
    /** progress */
    progress?: number;
    /** sectionId */
    sectionId?: number;
  };

  type recordListeningPracticeUsingPOSTParams = {
    /** accuracy */
    accuracy?: number;
    /** duration */
    duration: number;
    /** listeningId */
    listeningId: number;
  };

  type recordReadingPracticeUsingPOSTParams = {
    /** accuracy */
    accuracy?: number;
    /** articleId */
    articleId: number;
    /** duration */
    duration: number;
  };

  type recordWordStudyUsingPOSTParams = {
    /** accuracy */
    accuracy?: number;
    /** count */
    count?: number;
    /** wordId */
    wordId: number;
  };

  type removeFromWordBookUsingPOSTParams = {
    /** wordId */
    wordId: number;
  };

  type replyReviewUsingPOSTParams = {
    /** replyContent */
    replyContent: string;
    /** reviewId */
    reviewId: number;
  };

  type saveWordNoteUsingPOST1Params = {
    /** noteContent */
    noteContent: string;
    /** wordId */
    wordId: number;
  };

  type saveWordNoteUsingPOSTParams = {
    /** noteContent */
    noteContent: string;
    /** wordId */
    wordId: number;
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

  type unfavourCourseUsingPOSTParams = {
    /** courseId */
    courseId: number;
  };

  type updateMasteryLevelUsingPOST1Params = {
    /** masteryLevel */
    masteryLevel: number;
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

  type updateUserLevelByAdminUsingPOSTParams = {
    /** newLevel */
    newLevel: number;
    /** nextLevelExp */
    nextLevelExp?: number;
    /** userId */
    userId: number;
  };

  type uploadAndAddMaterialUsingPOSTParams = {
    /** courseId */
    courseId: number;
    /** description */
    description?: string;
    /** title */
    title: string;
  };

  type uploadFileUsingPOSTParams = {
    base64Data?: string;
    biz?: string;
    description?: string;
    filename?: string;
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
    collectTime?: string;
    createTime?: string;
    id?: number;
    isCollected?: number;
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

  type UserLearningRecordAddRequest = {
    accuracy?: number;
    count?: number;
    duration?: number;
    experience?: number;
    lessonNumber?: number;
    points?: number;
    recordDate?: string;
    recordType?: string;
    relatedId?: number;
    remark?: string;
    status?: string;
  };

  type UserLearningRecordQueryRequest = {
    current?: number;
    endDate?: string;
    id?: number;
    keyword?: string;
    lessonNumber?: number;
    maxAccuracy?: number;
    maxCount?: number;
    maxDuration?: number;
    maxExperience?: number;
    maxPoints?: number;
    minAccuracy?: number;
    minCount?: number;
    minDuration?: number;
    minExperience?: number;
    minPoints?: number;
    pageSize?: number;
    recordType?: string;
    relatedId?: number;
    sortField?: string;
    sortOrder?: string;
    startDate?: string;
    status?: string;
    userId?: number;
  };

  type UserLearningRecordUpdateRequest = {
    accuracy?: number;
    count?: number;
    duration?: number;
    experience?: number;
    id?: number;
    lessonNumber?: number;
    points?: number;
    recordDate?: string;
    recordType?: string;
    relatedId?: number;
    remark?: string;
    status?: string;
  };

  type UserLearningRecordVO = {
    accuracy?: number;
    count?: number;
    createTime?: string;
    duration?: number;
    experience?: number;
    formattedDuration?: string;
    id?: number;
    lessonNumber?: number;
    points?: number;
    recordDate?: string;
    recordType?: string;
    recordTypeName?: string;
    relatedId?: number;
    relatedName?: string;
    remark?: string;
    status?: string;
    statusName?: string;
    userAvatar?: string;
    userId?: number;
    userName?: string;
  };

  type UserLearningStats = {
    continuousCheckIn?: number;
    createTime?: string;
    experience?: number;
    id?: number;
    lastCheckInTime?: string;
    learningDays?: number;
    level?: number;
    nextLevelExp?: number;
    totalBadges?: number;
    totalCheckIn?: number;
    totalPoints?: number;
    updateTime?: string;
    userId?: number;
  };

  type UserLevel = {
    createTime?: string;
    description?: string;
    iconUrl?: string;
    id?: number;
    isDelete?: number;
    level?: number;
    levelName?: string;
    maxExperience?: number;
    minExperience?: number;
    privileges?: string;
    updateTime?: string;
  };

  type UserLevelAddRequest = {
    description?: string;
    iconUrl?: string;
    level?: number;
    levelName?: string;
    maxExperience?: number;
    minExperience?: number;
    privileges?: string;
  };

  type UserLevelQueryRequest = {
    current?: number;
    id?: number;
    level?: number;
    levelName?: string;
    maxExperienceEnd?: number;
    maxExperienceStart?: number;
    minExperienceEnd?: number;
    minExperienceStart?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type UserLevelUpdateRequest = {
    description?: string;
    iconUrl?: string;
    id?: number;
    level?: number;
    levelName?: string;
    maxExperience?: number;
    minExperience?: number;
    privileges?: string;
  };

  type UserLevelVO = {
    createTime?: string;
    description?: string;
    iconUrl?: string;
    id?: number;
    level?: number;
    levelName?: string;
    maxExperience?: number;
    minExperience?: number;
    privileges?: string;
    updateTime?: string;
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
    birthday?: string;
    createTime?: string;
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userAccount?: string;
    userEmail?: string;
    userGender?: number;
    userName?: string;
    userPhone?: string;
    userProfile?: string;
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
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userPhone?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserWordBookAddRequest = {
    difficulty?: number;
    wordId?: number;
  };

  type UserWordBookCollectionRequest = {
    isCollected?: number;
    wordId?: number;
  };

  type UserWordBookQueryRequest = {
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
