exports.get = (req, res) => {
    if (req.token) {
        res.render('userPrevMy', {
            layout: 'user',
            js: ['domUser'],
            css: 'user',
            username: req.token.userName,
            result: req.result,
        });
    }else{
        res.redirect('/')
    }
};