# Getting started

## Description

This repository is a solution to interview test.

## Installation

To install this project on your local machine 

1. Git Clone

Clone the url of the Git Repo

```shell

git clone <url>

```

2. Install 

To install the project dependencies

```shell
npm install my-project

cd my-project

```

3. Start

To start the project run

```shell

npm start

```

## Problem 1

**SSH Key Gen**

```git shell

The authenticity of host 'github.com (140.82.121.4)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? Host key verification failed.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

```

**solution**

[I solved my problem by running the following command in Git Bash](https://stackoverflow.com/a/69960780/17171424)

```git 
ssh-keyscan github.com >> ~/.ssh/known_hosts
```
in command prompt. This command will add authenticity to your known_hosts.


## Problem 2

**Nodemon**

```git shell
nodemon : File C:\Users\IFEANYI\AppData\Roaming\npm\nodemon.ps1 cannot be 
loaded because running scripts is disabled on this system. For more 
```

**solution**

[I solved this problem by running Windows Powershell as an administrator](https://stackoverflow.com/a/65488218/17171424)

1. Open PowerShell (Run As Administrator)

2. Check the current execution policy using this command


```
    Get-ExecutionPolicy
    # You should get 'Restricted'
```

3. Run this command to make it 'Unrestricted'

```
Set-ExecutionPolicy Unrestricted -Scope CurrentUser
```

4. Check again whether execution policy changed by running this command

```
    Get-ExecutionPolicy
    # You should get 'Unrestricted'
```

5. Now try to run nodemon on your project

```
nodemon 'filename.js'
```

## Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-34562l?style=for-the-badge&logo=Node.js&logoColor=white)

## Glitch Deploy

[<img src="https://cdn.gomix.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix-button.svg" width="163px" />](https://glitch.com/edit/#!/import/github/masterifeanyi/interview-ecommerce-backend)
