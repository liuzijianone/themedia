const articleDetailTest = 'http://223.3.65.243:8080/articles/2/0';
const articleDetail = 'http://223.3.65.243:9095/article/articles/6/0';

const articleSearchTestTmpl = (content, item, current_page) =>
    `http://223.3.84.128:8000/article/?content=${content}&item=${item}&current_page=${current_page}`;

const videoSearchTestTmpl = (content, item, current_page) =>
    `http://223.3.84.128:8000/video/?content=${content}&item=${item}&current_page=${current_page}`;

const articleReviewsTmpl = (status, pageSize, pageNum) =>
    `http://223.3.65.243:9095/article/articleReviews?status=${status}&pageSize=${pageSize}&pageNum=${pageNum}`;