let formState = false;
let path = "https://raw.githubusercontent.com/zurika777/NumberThu/refs/heads/master/data/lang.json"
let language = "ka";
let langs = [];

const openForm = () => {
    let form = document.getElementById('createForm');
    let button = document.getElementById('openForm');
if(!formState){
    form.style.display = "flex";
    formState = true;
    button.innerText = langs[language].closeForm;
}else {
    form.style.display = 'none';
    formState = false;
    button.innerText = langs[language].openForm;
    }
}
const getPost = () => {
    if(exists("posts")){
        return getJson("posts");
    }else{
        return [];
    }
}

const createNewPost = () => {
    let titleValue = document.getElementById('title').value;
    let contentValue = document.getElementById('content').value;
    let posts = getPost();
    if(posts.length > 0){
        posts.unshift({
            id: posts.length +1,
            title: titleValue,
            content: contentValue
        });
        createNewHtml({
            id: 1,
            title: titleValue,
            content: contentValue
        })
    }else{
        posts.push({
            id: 1,
            title: titleValue,
            content: contentValue
        });
        createNewHtml({
            id: posts.length +1,
            title: titleValue,
            content: contentValue
        })
    }
    set("posts", JSON.stringify(posts));
   document.getElementById("title").value = "";
   document.getElementById("content").value = "";
    openForm();
}

const openPost = (id) => {
    let content = document.getElementById(`content-${id}`);
    console.log(content.style.display === "none");
    if(content.style.display === "none" || !content.style.display){
        content.style.display = "block";
    }else {
        content.style.display = "none";
    }
}

const createNewHtml = (value, top = false) => {
    let noPosts = document.getElementById('noPosts');
    if(noPosts){
        noPosts.remove();
    }
    let post = document.createElement('div');
    post.className = "post";
    let title = document.createElement('h3');
    title.innerText = value.title;
    title.setAttribute("onclick", `openPost(${value.id})`);
    let content = document.createElement("p");
    content.innerText = value.content;
    content.setAttribute("id", `content-${value.id}`);
    post.appendChild(title);
    post.appendChild(content);
    if(top){
    postList.append(post);
    }else{
        postList.prepend(post);
    }
}
const swichLanguage = () => {
     const addTitle = document.getElementById('title');
     const addText = document.getElementById('content');
    const button = document.getElementById('swichLanguage');
    if(language ==="ka"){
        language ="en";
        document.getElementById('swichLanguage').innerText="ქართული";
         addTitle.placeholder = langs[language].addTitle;  // ინგლისური
         //button.innerText = "ქართული";  // ღილაკის ტექსტი შეიცვლება ქართულად
         addText.placeholder = langs[language].addText;
    }else{
        language = 'ka';
         document.getElementById('swichLanguage').innerText="English";
         addTitle.placeholder = langs[language].addTitle;  // ქართული
          // button.innerText = "English";  // ღილაკის ტექსტი შეიცვლება ინგლისურად
         addText.placeholder = langs[language].addText;    // ქართული

    }

    document.getElementById('openForm').innerText=langs[language].openForm;
      document.getElementById('noPosts').innerText=langs[language].noPosts;
    document.getElementById('add').innerText=langs[language].add;
}

const pageOnload = async() => {
    let fetchData = await fetch(path).then((response) => {
        return response.json();
    });

    if(fetchData){
        langs = fetchData;
    }
    document.getElementById('noPosts').innerText=langs[language].noPosts;
    let posts = getPost();
    if(posts.length > 0){
        for(let i = 0; i < posts.length; i++){
            createNewHtml(posts[i], true);
        }
}
    let post = document.createElement('h3');
    post.setAttribute("id", "noPosts");
    post.innerText = langs[language].noPosts;

}

window.onload = pageOnload();
