## S3
Amazon Simple Storage Service is storage for the Internet. It has a simple web services interface that you can use to store and retrieve any amount of data, at any time, from anywhere on the web. It gives any developer access to the same highly scalable, reliable, fast, inexpensive data storage infrastructure that Amazon uses to run its own global network of web sites.

We are going to deploy our **nj2jp's index.html** and other **static assets** to S3.

### Creation of S3 Bucket:
To upload our data (index.html, bundle.js, images), we first create a bucket in one of the AWS Regions. You can then upload any number of objects to the bucket.

1. Login to **AWS console** and choose **Asia Pacific (Tokyo)** region in the right corner of the screen.
2. Look for **S3** service under **Storage** section.
3. Click **Create Bucket** button in the left corner.
4. Enter the bucket name and select **Tokyo** as the region. The bucket name is unique to that region.
5. Hold on for few seconds, a bucket with our specified name will be created.
6. S3 is a **storage service**, but we are going to use it as our **Static website server**. So, here are the steps to configure it:
  1. Once the bucket is created, you will be in to that bucket page. Click the **Properties** button in the right corner.
  2. From the list of settings, click **Static Website Hosting** and toggle **Enable website hosting**.
  3. By default, files in S3 are accessible only to AWS user. Since, we are going to use it as a public website, we need to relieve some permissions.
  4. From the list of settings, click **Permissions** and click **Add bucket policy**.
  5. In the **dialog for policy**, add the JSON as shown below after replacing the ```<bucket-name>``` with our bucket name:
  ```js
  {
  	"Version": "2008-10-17",
  	"Statement": [
  		{
  			"Sid": "AddPerm",
  			"Effect": "Allow",
  			"Principal": {
  				"AWS": "*"
  			},
  			"Action": "s3:GetObject",
  			"Resource": "arn:aws:s3:::<bucket-name>/*"
  		}
  	]
  }  
  ```

This makes the **nj2jp react app** to be publicly accessible by all users. Now that we have created S3 bucket to host our files, lets see the setup to automate the deployment of build files to S3.

### Automation of S3 deployment:
The **npm build** or **yarn build** will build all the files to **dist** directory. Now, we need to deploy those files to our **S3 bucket**. Since uploading the files to S3 will be a manual task, We are trying to automate it.

Our automation solution is by using an **AWS cli** to upload files to S3 on **npm build** or **yarn build** command. There is a handy **sync** command by AWS cli, to upload files to S3 bucket. Here is the command:

```
aws s3 sync dist/ s3://<bucket-name>
```

We have added the command to **build script**, but change the ```<bucket-name>``` **with our bucket name**.

### Setting up AWS CLI:
**AWS cli** can be installed in mac OSX by brew. Here is the command:
```
brew install awscli
```
If you already have awscli installed then verify you're running the latest version with
```
pip install --upgrade --user awscli
```

We need AWS ```access-key``` and ```secret-key``` to work with AWS cli. Check out the next section to create access-key and secret-key. But once, these are created, make those as environment variables, like this:

```
AWS_SECRET_ACCESS_KEY=<access-key>
AWS_ACCESS_KEY_ID=<secret-key>
AWS_REGION=ap-northeast-1
```

### Creating an IAM user and AWS keys:
Create the user in IAM console and attach policies & permissions you need. Once the user is created, you can generate the access-key and secret-key in the IAM console.
