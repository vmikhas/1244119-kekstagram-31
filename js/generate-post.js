import { getRandomNumber, getRandomIdFromRangeGenerator } from './util.js';

const CARD_IMAGES = 25;

const IMAGE_ID_MIN = 1;
const IMAGE_ID_MAX = 25;

const IMAGE_URL_MIN = 1;
const IMAGE_URL_MAX = 25;

const IMAGE_DESCRIPTION = [
  'Красивый вид',
  'Диво дивное',
  'Морюшко',
  'Закат',
  'Любимое фото',
  'Отпуск',
];

const IMAGE_LIKES_MIN = 15;
const IMAGE_LIKES_MAX = 200;

const IMAGE_COMMENTS_MIN = 0;
const IMAGE_COMMENTS_MAX = 30;

const COMMENT_AVATAR_MIN = 1;
const COMMENT_AVATAR_MAX = 6;

const COMMENT_MESSAGE_MAX = 2;

const COMMENT_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENT_NAME = [
  'Константин',
  'Юрий',
  'Ольга',
  'Мирослава',
  'Екатерина',
  'Владислав',
  'Николай',
  'Елена',
  'Иван',
];

const generateId = getRandomIdFromRangeGenerator(IMAGE_ID_MIN, IMAGE_ID_MAX);
const generateUrl = getRandomIdFromRangeGenerator(IMAGE_URL_MIN, IMAGE_URL_MAX);
const generateCommentId = getRandomIdFromRangeGenerator(IMAGE_COMMENTS_MIN, IMAGE_COMMENTS_MAX);

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createMessages = () => {
  const message = [];

  for (let i = 0; i < getRandomNumber(1, COMMENT_MESSAGE_MAX); i++) {
    message.push({
      message: getRandomArrayElement(COMMENT_MESSAGE),
    });
  }
  return message;
};

function createComments() {
  return ({
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomNumber(COMMENT_AVATAR_MIN, COMMENT_AVATAR_MAX)}.svg`,
    message: createMessages(),
    name: getRandomArrayElement(COMMENT_NAME),
  });
}

const createPost = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: getRandomArrayElement(IMAGE_DESCRIPTION),
  likes: getRandomNumber(IMAGE_LIKES_MIN, IMAGE_LIKES_MAX),
  comments: createComments(),
});

export const generateCardPost = Array.from({ length: CARD_IMAGES }, createPost);
