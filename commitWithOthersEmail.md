# What happened if I commit with email which is NOT owned by myself?

1. [Reference](https://api.github.com/repos/uncloak/uncloak.github.io/commits/e3907d07d6139bfa82c75204a98896d6bb42e230)

2. [commit with invalid author(=) email](https://api.github.com/repos/ZXS66/messy/commits/f35e902e31843e6118c88c60f2362eb364ac7955)   [keep your email address private](https://help.github.com/articles/setting-your-email-in-git/)    [add the email address to your GitHub account](https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/#common-reasons-that-contributions-are-not-counted)

3. [commit with another person's email](https://api.github.com/repos/ZXS66/messy/commits/178631e091727f9c1c1ce4a7d31505b7a9d87f41) ([FisherTiger](https://github.com/FisherTiger))

4. [Commit with my backup email which not register on github before](https://api.github.com/repos/ZXS66/messy/commits/2adea9cda4405534315650fb1393c219e405d692)

    Commit with unverified email 

    ![commit with unverified email](https://cloud.githubusercontent.com/assets/17420671/24705816/1e6100f6-1a40-11e7-8253-71b8147026e9.JPG)

```JSON
{
  "sha": "2adea9cda4405534315650fb1393c219e405d692",
  "commit": {
    "author": {
      "name": "朱浔生",
      "email": "9jiang.jx@gmail.com",
      "date": "2017-04-05T12:26:46Z"
    },
    "committer": {
      "name": "朱浔生",
      "email": "9jiang.jx@gmail.com",
      "date": "2017-04-05T12:26:46Z"
    },
    "message": "commit with whatever email",
    "tree": {
      "sha": "267b3252b4f994673d2f54132b8fdd033b143aeb",
      "url": "https://api.github.com/repos/ZXS66/messy/git/trees/267b3252b4f994673d2f54132b8fdd033b143aeb"
    },
    "url": "https://api.github.com/repos/ZXS66/messy/git/commits/2adea9cda4405534315650fb1393c219e405d692",
    "comment_count": 0
  },
  "url": "https://api.github.com/repos/ZXS66/messy/commits/2adea9cda4405534315650fb1393c219e405d692",
  "html_url": "https://github.com/ZXS66/messy/commit/2adea9cda4405534315650fb1393c219e405d692",
  "comments_url": "https://api.github.com/repos/ZXS66/messy/commits/2adea9cda4405534315650fb1393c219e405d692/comments",
  "author": null,
  "committer": null,
  "parents": [
    {
      "sha": "178631e091727f9c1c1ce4a7d31505b7a9d87f41",
      "url": "https://api.github.com/repos/ZXS66/messy/commits/178631e091727f9c1c1ce4a7d31505b7a9d87f41",
      "html_url": "https://github.com/ZXS66/messy/commit/178631e091727f9c1c1ce4a7d31505b7a9d87f41"
    }
  ],
  "stats": {
    "total": 5,
    "additions": 3,
    "deletions": 2
  },
  "files": [
    {
      "sha": "0481fbc43829426b4ba07b2c012bf83494f436a3",
      "filename": "commitWithOthersEmail.md",
      "status": "modified",
      "additions": 3,
      "deletions": 2,
      "changes": 5,
      "blob_url": "https://github.com/ZXS66/messy/blob/2adea9cda4405534315650fb1393c219e405d692/commitWithOthersEmail.md",
      "raw_url": "https://github.com/ZXS66/messy/raw/2adea9cda4405534315650fb1393c219e405d692/commitWithOthersEmail.md",
      "contents_url": "https://api.github.com/repos/ZXS66/messy/contents/commitWithOthersEmail.md?ref=2adea9cda4405534315650fb1393c219e405d692",
      "patch": "@@ -3,7 +3,8 @@ What happened if I commit with email which not belong to me?\n \n [Reference](https://api.github.com/repos/uncloak/uncloak.github.io/commits/e3907d07d6139bfa82c75204a98896d6bb42e230)\n \n-[Reference 2](https://api.github.com/repos/ZXS66/messy/commits/053db6d93f12a61fb44060ff19b044cf86b5d125)\n+[commit with invalid author(=) email](https://api.github.com/repos/ZXS66/messy/commits/f35e902e31843e6118c88c60f2362eb364ac7955)\n \n-[Reference 3](https://api.github.com/repos/ZXS66/messy/commits/f35e902e31843e6118c88c60f2362eb364ac7955)\n+[commit with another person's email](https://api.github.com/repos/ZXS66/messy/commits/f35e902e31843e6118c88c60f2362eb364ac7955) ([FisherTiger](https://github.com/FisherTiger))\n \n+Commit with whatever email\n\\ No newline at end of file"
    }
  ]
}
```

5. After verifying email

    ![after verifying email](https://cloud.githubusercontent.com/assets/17420671/24705815/1e6019ac-1a40-11e7-8f67-a8204c6a3386.JPG)

``` JSON
{
  "sha": "2adea9cda4405534315650fb1393c219e405d692",
  "commit": {
    "author": {
      "name": "朱浔生",
      "email": "9jiang.jx@gmail.com",
      "date": "2017-04-05T12:26:46Z"
    },
    "committer": {
      "name": "朱浔生",
      "email": "9jiang.jx@gmail.com",
      "date": "2017-04-05T12:26:46Z"
    },
    "message": "commit with whatever email",
    "tree": {
      "sha": "267b3252b4f994673d2f54132b8fdd033b143aeb",
      "url": "https://api.github.com/repos/ZXS66/messy/git/trees/267b3252b4f994673d2f54132b8fdd033b143aeb"
    },
    "url": "https://api.github.com/repos/ZXS66/messy/git/commits/2adea9cda4405534315650fb1393c219e405d692",
    "comment_count": 0
  },
  "url": "https://api.github.com/repos/ZXS66/messy/commits/2adea9cda4405534315650fb1393c219e405d692",
  "html_url": "https://github.com/ZXS66/messy/commit/2adea9cda4405534315650fb1393c219e405d692",
  "comments_url": "https://api.github.com/repos/ZXS66/messy/commits/2adea9cda4405534315650fb1393c219e405d692/comments",
  "author": {
    "login": "ZXS66",
    "id": 17420671,
    "avatar_url": "https://avatars1.githubusercontent.com/u/17420671?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ZXS66",
    "html_url": "https://github.com/ZXS66",
    "followers_url": "https://api.github.com/users/ZXS66/followers",
    "following_url": "https://api.github.com/users/ZXS66/following{/other_user}",
    "gists_url": "https://api.github.com/users/ZXS66/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ZXS66/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ZXS66/subscriptions",
    "organizations_url": "https://api.github.com/users/ZXS66/orgs",
    "repos_url": "https://api.github.com/users/ZXS66/repos",
    "events_url": "https://api.github.com/users/ZXS66/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ZXS66/received_events",
    "type": "User",
    "site_admin": false
  },
  "committer": {
    "login": "ZXS66",
    "id": 17420671,
    "avatar_url": "https://avatars1.githubusercontent.com/u/17420671?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ZXS66",
    "html_url": "https://github.com/ZXS66",
    "followers_url": "https://api.github.com/users/ZXS66/followers",
    "following_url": "https://api.github.com/users/ZXS66/following{/other_user}",
    "gists_url": "https://api.github.com/users/ZXS66/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ZXS66/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ZXS66/subscriptions",
    "organizations_url": "https://api.github.com/users/ZXS66/orgs",
    "repos_url": "https://api.github.com/users/ZXS66/repos",
    "events_url": "https://api.github.com/users/ZXS66/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ZXS66/received_events",
    "type": "User",
    "site_admin": false
  },
  "parents": [
    {
      "sha": "178631e091727f9c1c1ce4a7d31505b7a9d87f41",
      "url": "https://api.github.com/repos/ZXS66/messy/commits/178631e091727f9c1c1ce4a7d31505b7a9d87f41",
      "html_url": "https://github.com/ZXS66/messy/commit/178631e091727f9c1c1ce4a7d31505b7a9d87f41"
    }
  ],
  "stats": {
    "total": 5,
    "additions": 3,
    "deletions": 2
  },
  "files": [
    {
      "sha": "0481fbc43829426b4ba07b2c012bf83494f436a3",
      "filename": "commitWithOthersEmail.md",
      "status": "modified",
      "additions": 3,
      "deletions": 2,
      "changes": 5,
      "blob_url": "https://github.com/ZXS66/messy/blob/2adea9cda4405534315650fb1393c219e405d692/commitWithOthersEmail.md",
      "raw_url": "https://github.com/ZXS66/messy/raw/2adea9cda4405534315650fb1393c219e405d692/commitWithOthersEmail.md",
      "contents_url": "https://api.github.com/repos/ZXS66/messy/contents/commitWithOthersEmail.md?ref=2adea9cda4405534315650fb1393c219e405d692",
      "patch": "@@ -3,7 +3,8 @@ What happened if I commit with email which not belong to me?\n \n [Reference](https://api.github.com/repos/uncloak/uncloak.github.io/commits/e3907d07d6139bfa82c75204a98896d6bb42e230)\n \n-[Reference 2](https://api.github.com/repos/ZXS66/messy/commits/053db6d93f12a61fb44060ff19b044cf86b5d125)\n+[commit with invalid author(=) email](https://api.github.com/repos/ZXS66/messy/commits/f35e902e31843e6118c88c60f2362eb364ac7955)\n \n-[Reference 3](https://api.github.com/repos/ZXS66/messy/commits/f35e902e31843e6118c88c60f2362eb364ac7955)\n+[commit with another person's email](https://api.github.com/repos/ZXS66/messy/commits/f35e902e31843e6118c88c60f2362eb364ac7955) ([FisherTiger](https://github.com/FisherTiger))\n \n+Commit with whatever email\n\\ No newline at end of file"
    }
  ]
}
```

6. When I try to readd the same email to my backup github account, it said: "Error adding 9jiang.jx@gmail.com: email is already in use".

7. Delete the backup email in primary github account, and readd it in my backup github account.

    ![image](https://cloud.githubusercontent.com/assets/17420671/24706651/fa87660e-1a42-11e7-9dcf-8aefaad72d29.png)

```JSON
{
  "sha": "2adea9cda4405534315650fb1393c219e405d692",
  "commit": {
    "author": {
      "name": "朱浔生",
      "email": "9jiang.jx@gmail.com",
      "date": "2017-04-05T12:26:46Z"
    },
    "committer": {
      "name": "朱浔生",
      "email": "9jiang.jx@gmail.com",
      "date": "2017-04-05T12:26:46Z"
    },
    "message": "commit with whatever email",
    "tree": {
      "sha": "267b3252b4f994673d2f54132b8fdd033b143aeb",
      "url": "https://api.github.com/repos/ZXS66/messy/git/trees/267b3252b4f994673d2f54132b8fdd033b143aeb"
    },
    "url": "https://api.github.com/repos/ZXS66/messy/git/commits/2adea9cda4405534315650fb1393c219e405d692",
    "comment_count": 0
  },
  "url": "https://api.github.com/repos/ZXS66/messy/commits/2adea9cda4405534315650fb1393c219e405d692",
  "html_url": "https://github.com/ZXS66/messy/commit/2adea9cda4405534315650fb1393c219e405d692",
  "comments_url": "https://api.github.com/repos/ZXS66/messy/commits/2adea9cda4405534315650fb1393c219e405d692/comments",
  "author": {
    "login": "FisherTiger",
    "id": 7485117,
    "avatar_url": "https://avatars0.githubusercontent.com/u/7485117?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/FisherTiger",
    "html_url": "https://github.com/FisherTiger",
    "followers_url": "https://api.github.com/users/FisherTiger/followers",
    "following_url": "https://api.github.com/users/FisherTiger/following{/other_user}",
    "gists_url": "https://api.github.com/users/FisherTiger/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/FisherTiger/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/FisherTiger/subscriptions",
    "organizations_url": "https://api.github.com/users/FisherTiger/orgs",
    "repos_url": "https://api.github.com/users/FisherTiger/repos",
    "events_url": "https://api.github.com/users/FisherTiger/events{/privacy}",
    "received_events_url": "https://api.github.com/users/FisherTiger/received_events",
    "type": "User",
    "site_admin": false
  },
  "committer": {
    "login": "FisherTiger",
    "id": 7485117,
    "avatar_url": "https://avatars0.githubusercontent.com/u/7485117?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/FisherTiger",
    "html_url": "https://github.com/FisherTiger",
    "followers_url": "https://api.github.com/users/FisherTiger/followers",
    "following_url": "https://api.github.com/users/FisherTiger/following{/other_user}",
    "gists_url": "https://api.github.com/users/FisherTiger/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/FisherTiger/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/FisherTiger/subscriptions",
    "organizations_url": "https://api.github.com/users/FisherTiger/orgs",
    "repos_url": "https://api.github.com/users/FisherTiger/repos",
    "events_url": "https://api.github.com/users/FisherTiger/events{/privacy}",
    "received_events_url": "https://api.github.com/users/FisherTiger/received_events",
    "type": "User",
    "site_admin": false
  },
  "parents": [
    {
      "sha": "178631e091727f9c1c1ce4a7d31505b7a9d87f41",
      "url": "https://api.github.com/repos/ZXS66/messy/commits/178631e091727f9c1c1ce4a7d31505b7a9d87f41",
      "html_url": "https://github.com/ZXS66/messy/commit/178631e091727f9c1c1ce4a7d31505b7a9d87f41"
    }
  ],
  "stats": {
    "total": 5,
    "additions": 3,
    "deletions": 2
  },
  "files": [
    {
      "sha": "0481fbc43829426b4ba07b2c012bf83494f436a3",
      "filename": "commitWithOthersEmail.md",
      "status": "modified",
      "additions": 3,
      "deletions": 2,
      "changes": 5,
      "blob_url": "https://github.com/ZXS66/messy/blob/2adea9cda4405534315650fb1393c219e405d692/commitWithOthersEmail.md",
      "raw_url": "https://github.com/ZXS66/messy/raw/2adea9cda4405534315650fb1393c219e405d692/commitWithOthersEmail.md",
      "contents_url": "https://api.github.com/repos/ZXS66/messy/contents/commitWithOthersEmail.md?ref=2adea9cda4405534315650fb1393c219e405d692",
      "patch": "@@ -3,7 +3,8 @@ What happened if I commit with email which not belong to me?\n \n [Reference](https://api.github.com/repos/uncloak/uncloak.github.io/commits/e3907d07d6139bfa82c75204a98896d6bb42e230)\n \n-[Reference 2](https://api.github.com/repos/ZXS66/messy/commits/053db6d93f12a61fb44060ff19b044cf86b5d125)\n+[commit with invalid author(=) email](https://api.github.com/repos/ZXS66/messy/commits/f35e902e31843e6118c88c60f2362eb364ac7955)\n \n-[Reference 3](https://api.github.com/repos/ZXS66/messy/commits/f35e902e31843e6118c88c60f2362eb364ac7955)\n+[commit with another person's email](https://api.github.com/repos/ZXS66/messy/commits/f35e902e31843e6118c88c60f2362eb364ac7955) ([FisherTiger](https://github.com/FisherTiger))\n \n+Commit with whatever email\n\\ No newline at end of file"
    }
  ]
}
```

**Conclusion**: `result.commit.author.email` is the same as `result.author`. When user update&verify his/her email address, the commit message will also be changed. But the `result.commit.author.name` remains the same value, no matter who is the email owner. It (`result.commit.author.name`) can be and only can be set when commit.

BTW, I think the owner of email binaryminded@gmail.com is [the author(uncloak)](https://github.com/uncloak) of [this commit](https://api.github.com/repos/uncloak/uncloak.github.io/commits/e3907d07d6139bfa82c75204a98896d6bb42e230) instead of [another person(tech-chieftain)](https://github.com/tech-chieftain) who declare that email in profile page. Because his *verified* email address is assassioxy@gmail.com. We can find the result from [here](https://api.github.com/repos/tech-chieftain/tech-chieftain.github.io/commits/165c7cae320be0fb3a521d600ce37e2a9fab49b5). 

I have changed my backup github account primary email to 9jiang.jx@gmail.com, but [the profile page](https://github.com/FisherTiger) keep saying my email is zh_cn2008@hotmail (previous primary email of my backup github account). So may I say the email shown in github user profile page is the original one register github account?

