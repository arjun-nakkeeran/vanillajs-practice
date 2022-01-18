
function urlify(blogTitle) {
    const punctuation = /[.,#!$%^&*();:{}=_-~`]/g;

    const blogTitleF = blogTitle.replaceAll(punctuation, "");
    return blogTitleF;
}

console.log(urlify('I got a new job!'));

console.log(urlify("I've got a new job."));
