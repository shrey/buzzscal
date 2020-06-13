#!/bin/bash

if test "$#" -lt 2
then
	echo "Usage: "
	echo "./autowrite.sh <file_name> <method_type>"
	exit 1
fi

file=$1
method=$2

if ! test -f $file
then
	touch $file
fi

echo "var router = require('express').Router()" > $file
echo "var MongoClient = require('mongodb').MongoClient" >> $file
echo "var ObjectId = require('mongodb').ObjectId" >> $file
echo "" >> $file
echo "" >> $file
echo "//Mongo Url" >> $file
echo "const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:8000'" >> $file
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
echo "" >> $file
echo "module.exports = router" >> $file
