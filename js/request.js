/*
let formState = false;
let path = "https://raw.githubusercontent.com/zurika777/NumberOneProgramer/main/data/lang.json";
let language = 'ka';
let langs = [];

const openForm = () => {
    let form = document.getElementById('createForm');
    let button  = document.getElementById('openForm');
    if(!formState){
        form.style.display = 'flex';
        formState = true;
        button.innerText = langs[language].closeForm;
    }else{
        form.style.display = 'none';
        formState = false;
        button.innerText = langs[language].openForm;
    }
}
const getPosts = () => {
    if(exists('posts')){ //exists თუ არსებობს წამოიღე
        return getJson('posts');
    }else{
        return [];
    }
}

const createNewPost =() => {
    let titleValue = document.getElementById('title').value; //სატაური პოსტის
    let contentValue = document.getElementById('content').value; // ტექსტი
    let posts = getPosts(); //ყველა პოსტი თუ რაიმე არის მოცემული
    if(posts.length > 0){
        posts.unshift({   // თავში მოათავსოს ახალი დამატებული პოსტები და არა ბოლოში
            id: posts.length +1,
            title: titleValue,
            content: contentValue
        });
        createNewHtml({
            id: 1,
            title: titleValue,
            content: contentValue
        });
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
        });
    }
    set("posts", JSON.stringify(posts)); //JSON.stringify(). Преобразуйте объект в строку
    document.getElementById('title').value='';
    document.getElementById('content').value='';
    openForm();



}
const openPost = (id) => {
    let content = document.getElementById(`content-${id}`);
    if(content.style.display === "none" || !content.style.display){
        content.style.display = "block";
    }else{
        content.style.display = "none";
    }
}

const createNewHtml = (value, top = false) => {
    let noPosts = document.getElementById("noPosts");
    if(noPosts){
        noPosts.remove();
    }
    let post = document.createElement('div');
    post.className = "post";
    let title = document.createElement('h3');
    title.setAttribute('onclick', `openPost(${value.id})`);
    title.innerText = value.title;
    let content = document.createElement('p');
    content.setAttribute('id', `content-${value.id}`);
    content.innerText = value.content;
    post.appendChild(title);
    post.appendChild(content);
    if(top){
        postList.append(post);
    }else{
        postList.prepend(post);
    }
}

const swichLanguage = () => {
    if(language === "ka"){
        language ="en";
        document.getElementById('swichLanguage').innerText ="ქართული";
    }else{
        language = 'ka';
         document.getElementById('swichLanguage').innerText ="English";
    }
    document.getElementById('openForm').innerText = langs[language].openForm;
    document.getElementById('noPosts').innerText = langs[language].noPosts;
    document.getElementById('add').innerText = langs[language].add;
}

const pageOnload = async  () => {
    let fetchData = await fetch(path).then((response) => {
        return response.json();
    });
    if(fetchData){
        langs = fetchData;
    }
    let posts = getPosts();
    if(posts.length > 0){
        for(let i = 0; i< posts.length; i++){
            createNewHtml(posts[i], true);
        }
    }
    let post = document.createElement('h3');
    post.setAttribute("id", "noPosts");
    post.innerText = langs[language].noPosts;
    postList.prepend(post);
}

window.onload = pageOnload();
*/









/*
const mydrive = (some) => {
    document.getElementById("demo").innerHTML = some;
}

const calculator = (num1 , num2) => {
    let sum = num1 + num2;
    return sum;
}

let result = calculator(2, 5);
mydrive(result);
*/












/*
let data = [-1, 1, 2, -2, 3, -3, -4, 4, -5, 5, -6, 6];

const filterData = (data, callBackfilter) => {
   return data.filter(callBackfilter);


}
    console.log(filterData(data, (x) => x > 0));
    console.log(filterData(data, (x) => x < 0));
*/






    //console.log(filterData(data, (x) => x < 0));

/*let ajaxExample = new XMLHttpRequest();
ajaxExample.open("GET", path, true);
ajaxExample.onload = function() {
    let data = JSON.parse(this.responseText);
    setTimeout(() => {

    alert(data.noPosts);
    }, 1000)
}
ajaxExample.send();*/


/*const firstAsync = async () => {
    return   await  fetch(path).then(response => {
      let data =  response.json();

    alert(data.noPosts);
   });



}
firstAsync();*/
