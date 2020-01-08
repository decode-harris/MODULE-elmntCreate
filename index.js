// input variables
let title = document.querySelector('#title');
let tagline = document.querySelector('#tagline');
let category = document.querySelector('#category');
let text = document.querySelector('#text');
// input label variables
const label_tag = document.querySelector('#label-tag');
const label_title = document.querySelector('#label-title');
const label_cat = document.querySelector('#label-cat');
const label_text = document.querySelector('#label-text');
// input preview variables
let preview_title = document.querySelector('#preview-title');
let preview_tagline = document.querySelector('#preview-tagline');
let preview_intro = document.querySelector('#preview-intro');
// event buttons
const addBtn = document.querySelector('#addBtn');
const clrBtn = document.querySelector('#clrBtn');
// input error validation msg variables
// change naming convention to match label & preview
let title_error = document.querySelector('#title-error');
let tag_error = document.querySelector('#tag-error')
let cat_error = document.querySelector('#cat-error');
let text_error = document.querySelector('#text-error');
// error msg images [ tick or cross ]
var error_img = document.querySelector('.error-img');
var accept_img = document.querySelector('.accept-img');

/*  attach following functions to add / submit button
    prevent default, 
    form validation,
    user validation help,
    blog preview
*/
addBtn.addEventListener('click', (e) => {
    // prevent the btn from submitting onclick
    e.preventDefault();
    // user form error validation helper
    titleError();
    tagError();
    catError();
    textError();
    // user form validation
    validateTitle();
    validateTag();
    validateCat();
    validateText();
    // user form preview
    showPreview();
    
});

/* 
    validate the title of the blog
    provide the user with visual cues to help complete the input
    validate the input to make sure it meets the minimum requirements
*/
function validateTitle() {
    if (title.value == '') {
        title.style.border = '4px solid red';
        
        error_img.style.display = 'flex';
        error_img.style.color = 'red';
        accept_img.style.display = 'none';
    } else {
        title.innerHTML = '';
        title.style.border = '4px solid green';
        title.style.backgroundColor = 'green';
        title.style.color = '#FFF';
        title.style.textAlign = 'center';
        title.style.fontWeight = 'bold';

        error_img.style.display = 'none';
        accept_img.style.display = 'flex';
        accept_img.style.color = 'green';
    }
}

function validateTag() {
    if (tagline.value == '') {
        tagline.style.border = '4px solid red';

        error_img.style.display = 'flex';
        error_img.style.color = 'red';
        accept_img.style.display = 'none';
        
    } else {
        tagline.style.border = '4px solid green';
        tagline.style.backgroundColor = 'green';
        tagline.style.color = '#FFF';
        tagline.style.textAlign = 'center';
        tagline.style.fontWeight = 'bold';

        error_img.style.display = 'none';
        accept_img.style.display = 'flex';
        accept_img.style.color = 'green';

        
    }
}

function validateCat() {
    if (category.value == '') {
        category.style.border = '4px solid red';

        error_img.style.display = 'flex';
        error_img.style.color = 'red';
        accept_img.style.display = 'none';
    } else {
        category.style.border = '4px solid green';
        category.style.backgroundColor = 'green';
        category.style.color = '#FFF';
        category.style.textAlign = 'center';
        category.style.fontWeight = 'bold';
    }
}

function validateText() {
    if (text.value == '') {
        text.style.border = '4px solid red';
    } else {
        text.style.border = '4px solid green';
        text.style.backgroundColor = 'green';
        text.style.color = '#FFF';
        text.style.textAlign = 'center';
        text.style.fontWeight = 'bold';
    }
}

/*
    once all form data has been validated, 
    provide a small preview of the users current blog in real time
    add functionality for the user to go back and edit

*/
function showPreview() {
    if (title.value != '' && tagline.value != '' && text.value != '') {
        console.log(title.value);
        console.log(tagline.value);
        console.log(category.value);
        console.log(text.value);

        preview_title.innerHTML = title.value;
        preview_tagline.innerHTML = tagline.value;

        var textArray = text.value;
        var i;

        for (i = 0; i < textArray.length; i++) {
            console.log(textArray);
            preview_intro.innerHTML = textArray.slice(0, 35) + "...";
        } 
    }
    
    
}
/*
    if the input field in null, animate the label in which produced the validation error,
    than apply a span element underneath the label to explain how to complete each input

*/

function titleError() {
    if (title.value == '' ) {
        
        label_title.className = 'shake';
        label_title.style.color = 'red';

        title_error.style.display = 'block';
        title_error.innerHTML = 'please choose a title';
        title_error.style.fontWeight = 'bolder';
        
    } else {
        validateTitle;      
        title_error.style.display = 'none';
        label_title.style.transition = '400ms all ease-in';
        label_title.style.color = 'green';
        label_title.style.fontWeight = 'bold';
        label_title.style.textDecoration = 'underline';
        label_title.style.letterSpacing = '2px';
    }
}

function tagError() {
    if (tagline.value == '') {
        
        label_tag.className = 'shake';
        tag_error.style.color = 'red';
        tag_error.style.display = 'block';
        tag_error.innerHTML = 'please choose a tagline';
        tag_error.style.fontWeight = 'bolder';
        
    } else {
        validateTag;
        tag_error.style.display = 'none';
        label_tag.style.transition = '400ms all ease-in';
        label_tag.style.color = 'green';
        label_tag.style.fontWeight = 'bold';
        label_tag.style.textDecoration = 'underline';
        label_tag.style.letterSpacing = '2px';
        
    }
}

function catError() {
    if (category.value == '') {
        
        label_cat.className = 'shake';
        cat_error.style.color = 'red';
        cat_error.style.display = 'block';
        cat_error.innerHTML = 'please add a category';
        cat_error.style.fontWeight = 'bolder';

    } else {
        validateCat;
        cat_error.style.display = 'none';
        label_cat.style.transition = '400ms all ease-in';
        label_cat.style.color = 'green';
        label_cat.style.fontWeight = 'bold';
        label_cat.style.textDecoration = 'underline';
        label_cat.style.letterSpacing = '2px';
    }
}

function textError() {
    if (text.value == '') {
        
        label_text.className = 'shake';
        text_error.style.color = 'red';
        text_error.style.display = 'block';
        text_error.innerHTML = 'please use more than 20 characters';
        text_error.style.fontWeight = 'bolder';

    } else {
        validateText;
        text_error.style.display = 'none';
        label_text.style.transition = '400ms all ease-in';
        label_text.style.color = 'green';
        label_text.style.fontWeight = 'bold';
        label_text.style.textDecoration = 'underline';
        label_text.style.letterSpacing = '2px';
    }
}



// finalized version will include these functions on the user dash / buttons area

function createBlog() {
    validateInput;
    previewInput;
    confirmInput;
    postInput;

}
function deleteBlog() {
    validateInput;
    confirmDelete;
    deleteInput;
}


