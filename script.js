

function AddLike(e) {
    var likes = e.parentElement.querySelector(".likes");
    let numlike = parseInt(likes.innerText);
    likes.innerText = numlike + 1;

}