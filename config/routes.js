const upload = require('../multer/uploadImg')

module.exports = app => {
    app.get('/', (req, res) => res.render('index'));

    app.post('/upload', (req, res) => {
        upload(req, res, (err) => {
            if (err) {
                res.render('index', {
                    msg: err
                });
            }else{
                if(req.file == undefined){
                    res.render('index', {
                        msg: 'Error: No File Selected!'
                    })
                }else{
                    res.render('index', {
                        msg: 'File Uploaded!',
                        file: `uploads/${req.file.filename}`
                    })
                }
            }
        });
    });

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};