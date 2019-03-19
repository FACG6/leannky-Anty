exports.signupLoginValidation = (req, res, next) => {
  const { userName, password, confirmPassword } = req.body;
  if (!userName.trim() || !password.trim() || !confirmPassword.trim()) {
    return res.status(200).send(JSON.stringify('يجب ملئ جميع الحقول'));
  }
  if (userName.length < 4 || userName.length > 20) {
    return res.status(200).send(JSON.stringify('اسم المستخدم يجب ألا يزيد عن 20 وألا يقل عن 4 أحرف'));
  }
  if (userName.includes(' ')) {
    return res.status(200).send(JSON.stringify('اسم المستخدم يجب ألا يحتوي على مسافات'));
  }
  if (password.length < 3) {
    return res.status(200).send(JSON.stringify('كلمة المرور يجب ألا يقل عن 3 أحرف/أرقام'));
  }
  
  if (confirmPassword && (password.trim() !== confirmPassword.trim())) {
    return res.status(200).send(JSON.stringify('يجب تطابق كلمتي المرور'));
  }
  next();
};
