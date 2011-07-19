var color       = '#F6EFD2 !important',
    comments    = document.querySelectorAll('div.post.tree'),
    author      = document.querySelector('#navigation.two_columns tbody tr td.one div.post.ord > div.dd > div.p a:nth-of-type(2)').innerHTML;
    
for (var i = 0, commentsCount = comments.length; i < commentsCount; ++i) {
    var commentAuthor = comments[i].querySelector('div.dd > div.p > a').innerHTML;

    if ( commentAuthor == author ) { 
        comments[i].querySelector('div.p').style.background = color;
    }
}