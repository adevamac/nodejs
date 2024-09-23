const pal ={
    index:(req, res)=>{
        res.render('index', { activePage: 'index' });
    },
    shop:(req, res)=>{
        res.render('shop', { activePage: 'shop' });
    },
    about_us:(req, res)=>{
        res.render('about_us', { activePage: 'about_us' });
    },
    services:(req, res)=>{
        res.render('services', { activePage: 'services' });
    },

    blog:(req, res)=>{
        res.render('blog', { activePage: 'blog' });
    },
    contact:(req, res)=>{
        res.render('contact', { activePage: 'contact' });
    },
    cart:(req, res)=>{
        res.render('cart', { activePage: 'cart' });
    }
    


}

module.exports = pal;