#!/bin/bash

file=$1
method=$2

echo "var router = require('express').Router()" > $file
echo "var MongoClient = require('mongodb').MongoClient" >> $file
echo "var ObjectId = require('mongodb').ObjectId" >> $file
echo "" >> $file
echo "" >> $file
echo "//Mongo Url" >> $file
echo "const MONGO_URI = process.env.MONGO_URI | 'mongodb://localhost:8000'" >> $file
echo "" >> $file
echo "" >> $file
echo "router.$method('/', (req, res, next)=>{" >> $file
echo "" >> $file
echo "	MongoClient.connect(MONGO_URI, (error, client)=>{" >> $file
echo "		if(error){" >> $file
echo "			res.status(501).json({'msg' : 'Cannot Connect to Database Server '});" >> $file
echo "		} else {" >> $file
echo "		" >> $file
echo "		}" >> $file
echo "	});" >> $file
echo "});" >> $file
echo "module.exports = router" >> $file
