var color       = '#D3E2F0 !important',
    comments    = document.querySelectorAll('li.comment_holder.vote_holder'),
    author      = document.querySelector('#main-content .vcard.author.full > a > span').innerHTML;
    
for (var i = 0, commentsCount = comments.length; i < commentsCount; ++i) {
    var commentAuthor = comments[i].querySelector('.nickname > a').innerHTML;
    if ( commentAuthor == author ) { 
        comments[i].querySelector('.msg-meta').style.background = color;
        comments[i].querySelector('.entry-content').style.background = color;
    }
}