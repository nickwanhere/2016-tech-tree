#Week 2 - Hugo , Lambda , S3

From ryansb's repository https://github.com/ryansb/hugo-lambda, you could get the most of the code over there, but seems the repos isnt maintance actively. The tutorial seems to be the one relabled source, but it somehow wont work with some Asia region like Seoul. Keep bringing the error 'Non-file stream objects are not supported with SigV4', so I tweaked the code a bit to match the region.

The error seems off now, but the hugo error still persist, saying the theme folder static folder cannot be found, which is not true on s3.
