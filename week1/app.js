require('dotenv').load();

var s3 = require('s3');
var AWS = require('aws-sdk');

var env_accessKeyId = process.env.accessKeyId;
var env_secretAccessKey = process.env.secretAccessKey;
var env_region = process.env.region;

var s3Options = {
	accessKeyId : env_accessKeyId,
	secretAccessKey : env_secretAccessKey,
	region : env_region,
	signatureVersion: 'v4',
};

console.log(s3Options);


var awsS3Client = new AWS.S3(s3Options);

var client = s3.createClient({
	s3Client: awsS3Client,
	maxAsyncS3 : 20,
	s3RetryCount : 3,
	s3RetryDelay : 1000,
	multipartUploadThreshold : 20971520,
	multipartUploadSize : 15728640,
});

var params = {
	localFile : '/Users/nickwanhere/2016-tech-tree/week1/test.txt',
	s3Params : {
		Bucket : "nickwan.co",
		Key : "test.txt",
	}
};

var uploader = client.uploadFile(params);
uploader.on('error' , function(err){
console.error("unable to upload:", err.stack);
});
uploader.on('progress', function(){
	console.log('progress', uploader.pregressMd5Amount, uploader.progressAmount, uploader.progressTotal);

});
uploader.on('end', function(){
	console.log('done upload');

});
