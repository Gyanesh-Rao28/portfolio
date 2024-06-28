import aws from '@/public/svg/skils/aws.svg';
import azure from '@/public/svg/skils/azure.svg';
import c from '@/public/svg/skils/c.svg';
import cplusplus from '@/public/svg/skils/cplusplus.svg';
import django from '@/public/svg/skils/django.svg';
import docker from '@/public/svg/skils/docker.svg';
import firebase from '@/public/svg/skils/firebase.svg';
import git from '@/public/svg/skils/git.svg';
import go from '@/public/svg/skils/go.svg';
import graphql from '@/public/svg/skils/graphql.svg';
import html from '@/public/svg/skils/html.svg';
import java from '@/public/svg/skils/java.svg';
import javascript from '@/public/svg/skils/javascript.svg';
import materialui from '@/public/svg/skils/materialui.svg';
import mongoDB from '@/public/svg/skils/mongoDB.svg';
import mysql from '@/public/svg/skils/mysql.svg';
import nextJS from '@/public/svg/skils/nextJS.svg';
import nginx from '@/public/svg/skils/nginx.svg';
import numpy from '@/public/svg/skils/numpy.svg';
import opencv from '@/public/svg/skils/opencv.svg';
import postgresql from '@/public/svg/skils/postgresql.svg';
import python from '@/public/svg/skils/python.svg';
import pytorch from '@/public/svg/skils/pytorch.svg';
import react from '@/public/svg/skils/react.svg';
import selenium from '@/public/svg/skils/selenium.svg';
import strapi from '@/public/svg/skils/strapi.svg';
import tailwind from '@/public/svg/skils/tailwind.svg';
import tensorflow from '@/public/svg/skils/tensorflow.svg';
import typescript from '@/public/svg/skils/typescript.svg';
import vitejs from '@/public/svg/skils/vitejs.svg';
import prisma from '@/public/svg/skils/prisma.svg';
import matlab from '@/public/svg/skils/matlab.svg';
import socketio from '@/public/svg/skils/socketio.svg';

export const skillsImage = (skill: string) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'sockectio':
            return socketio;
        case 'matlab':
            return matlab;
        case 'prisma':
            return prisma;
        case 'html':
            return html;
        case 'docker':
            return docker;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'vue':
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'python':
            return python;
        case 'aws':
            return aws;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'materialui':
            return materialui;
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'pytorch':
            return pytorch;
        case 'selenium':
            return selenium;
        case 'strapi':
            return strapi;
        case 'tensorflow':
            return tensorflow;
        case 'azure':
            return azure;
        default:
            break;
    }
}