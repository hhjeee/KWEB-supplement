// 게시물 데이터
const POSTS = [
  {
    username: "pan._.da",
    likes: 10,
    description: "안녕 나는 판다야!",
    image:
      "https://cdn.pixabay.com/photo/2016/03/04/22/54/animal-1236875_1280.jpg",
  },
  {
    username: "rrred_panda",
    likes: 30,
    description: "안녕 나는 레서판다야!",
    image:
      "https://cdn.pixabay.com/photo/2018/06/28/12/34/panda-3503779_1280.jpg",
  },
  {
    username: "kitty__",
    likes: 20,
    description: "안녕 나는 고양이야!",
    image:
      "https://cdn.pixabay.com/photo/2018/01/14/14/42/cat-3081939_1280.jpg",
  },
  {
    username: "doosan_bear",
    likes: 25,
    description: "안녕 나는 곰이야!",
    image:
      "https://cdn.pixabay.com/photo/2021/11/05/18/23/bear-6771842_1280.jpg",
  },
  {
    username: "puppy123",
    likes: 32,
    description: "안녕 나는 강아지야!",
    image:
      "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg",
  },
  {
    username: "im_bunny",
    likes: 17,
    description: "안녕 나는 토끼야!",
    image:
      "https://cdn.pixabay.com/photo/2017/04/02/22/36/easter-2197043_1280.jpg",
  },
];

//네비게이션 바
//kweb 홈페이지 이동
const kwebBtn = document.getElementById("kweb");
function goKweb() {
  location.href = "https://kwebofficial.com";
}
kwebBtn.addEventListener("click", goKweb);

//정렬
function deletePost() {
  for (let i = 0; i < POSTS.length; i++) {
    const post = document.querySelector(".post");
    post.remove();
  }
}

const sort = document.getElementById("sort");
function sortPosts() {
  POSTS.sort((a, b) => b.likes - a.likes);
  deletePost();
  main();
}
sort.addEventListener("click", sortPosts);

//완성된 한 개의 post element 반환
function createPost(post) {
  const postElement = document.createElement("div");
  postElement.setAttribute("class", "post");

  // # 1.1 createPost 함수 구현
  //username, likes, description, image

  const profile = document.createElement("div");
  profile.setAttribute("class", "profile");
  postElement.appendChild(profile);

  const username = document.createElement("div");
  username.setAttribute("class", "username");
  username.innerText = POSTS[post].username;
  postElement.appendChild(username);

  const image = document.createElement("img");
  image.setAttribute("class", "image");
  const chosenImage = POSTS[post].image;
  image.src = `${chosenImage}`;
  postElement.appendChild(image);

  const heart = document.createElement("img");
  heart.setAttribute("class", "heart");
  heart.src = `img/heart.png`;
  postElement.appendChild(heart);

  const likes = document.createElement("span");
  likes.setAttribute("class", "likes");
  likes.innerText = POSTS[post].likes;
  postElement.appendChild(likes);

  const description = document.createElement("div");
  description.setAttribute("class", "description");
  description.innerText = POSTS[post].description;
  postElement.appendChild(description);

  return postElement;
}

// main 실행 함수
// createPost와 POSTS 배열 이용해 포스트 생성
function main() {
  // 게시물 엘리먼트를 넣어야 하는 곳
  const postsContainer = document.getElementById("posts");
  //# 1.2 createPost로 만든 post를 postsContainer에 하나씩 넣는 코드

  for (let i = 0; i < POSTS.length; i++) {
    postsContainer.appendChild(createPost(i));
  }
}

main();
