const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const authorisation = require("../middlewares/authorisation")

router.get('/allBooks', async (req, res)=>{
    try{const book_list = await Post.find({});
    res.json(book_list);
    } catch (err){
        res.json({message: err});
    }
});

router.post('/newBook',authorisation , async (req, res)=>{
    const post = new Post({
        Name: req.body.Name,
        Author: req.body.Author,
        Image: req.body.Image,
        Rating: req.body.Rating,
        countUser: req.body.countUser,
        countBook: req.body.countBook,
        tags:req.body.tags
    });

    await post.save()
    .then(data =>{
        res.json(data);
    })
    .catch(err =>{
        console.log(err);
    });
});

router.get('/particularBook/:ID', async (req, res)=>{
    try{
        const book = await Post.findById({"_id": req.params.ID});
        res.json(book);
    }
    catch (err){
        res.json({message: err});
    }
});

router.put('/editBook/:ID', async (req, res)=>{
    try{
        const { Name, Author, Image, Rating, countUser, countBook } = req.body;

        const newBook = {};

        if(Name){
            newBook.Name = Name
        }
        if(Author){
            newBook.Author = Author
        }
        if(Image){
            newBook.Author = Image
        }
        if(Rating){
            newBook.Rating = Rating
        }
        if(countBook){
            newBook.countBook = countBook
        }

        const book = await Post.findById(req.params.ID);
        if(!book){
            return res.status(401).json("Not Found")
        }

        const updatedBook = await Post.findByIdAndUpdate(req.params.ID,
            {$set: newBook},
            {new: true}
        );
        return res.json(updatedBook);
    }
    catch(err){
        res.json({message: err});
    }
});

router.delete('/deleteBook/:ID', async (req, res)=>{
    const book = await Post.findById(req.params.ID);
    if(!book){
        return res.status(401).json("Not Found");
    }

    try{
    const deletedBook = await Post.findByIdAndDelete(req.params.ID);
    res.json(deletedBook);
    } catch(err) {
        res.send({message: err});
    }
});



router.get('/:bookID', async (req, res)=>{
    try{const book_list = await Post.findById({'_id': req.params.bookID});
    res.json(book_list);
    } catch (err){
        res.json({message: err});
    }
})

module.exports = router;