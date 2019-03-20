exports.get = (req, res, next) => {

          res.render('userProfile', {
            layout: 'user',
            js: ['domUser'],
            css:'user',
            userName:req.token.userName,
          });
        
  
};
