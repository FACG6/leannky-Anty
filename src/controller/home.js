exports.get = (req, res) => {
    res.render('home',{
        js:'domSignup',
        css:'loginSignup', 
        msg:''
    })
};
