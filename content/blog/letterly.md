---
title: 'Introducing Letterly: A Privacy-Focused FutureMe Alternative'
description: 'The modern alternative to FutureMe, helping you write and send letters to your future self.'
draft: false
date: '2026-05-20'
author: ['Emmanuel Raymond']
slug: 'letterly'
category: 'Product'
# image: { src: 'letterly.svg', alt: 'Letterly logo' }

#sitemap:
# lastmod: 2026-05-11
---

I used to use FutureMe to send letters to myself.

Every now and then, I would write something to a version of myself I hoped would still understand the feeling behind it. A birthday check-in. A private note after a difficult season. A little promise to the person I was trying to become.

Recently, I went back to send another letter and hit a paywall. The thing I remembered as a free, simple ritual now asked me to pay at least $2 before I could send a plain text letter to an email address. Maybe that makes sense as a business decision, but it also broke the feeling for me a little.

And because I am apparently the kind of person who sees a tiny inconvenience and turns it into a product, I decided to build the version I wanted to use: simple, thoughtful, private, and delightful for myself first. Hopefully, other people find it useful too.

Today, we are introducing [Letterly](https://useletterly.com/), a private and intentional way to write a letter to the future.

## What is Letterly?

Letterly is a digital time capsule for thoughts, memories, goals, and promises.

You write a letter, choose when it should arrive, and seal it. When the date comes, Letterly delivers it by email.

That is the whole loop. No noisy social feed. No dashboard designed to make you keep checking. No pressure to turn reflection into content. Just a message from who you are now to someone in the future.

For most people, that someone will be their future self. But Letterly also supports sending to another email address with verification, so you can create a future birthday note, anniversary message, encouragement, or memory for someone else.

## Why we built it

The internet is very good at helping us publish what we think immediately. It is less good at helping us sit with something, save it, and let time give it meaning.

We wanted to build a product that creates a little distance between the present and the future. A place where you can capture what today feels like, then let it go.

That matters because writing to the future is different from writing in a notes app.

A note waits for you to come back. A future letter comes back to you.

That small difference changes the emotional weight of the thing. It turns a thought into a gift. It turns a goal into a checkpoint. It turns a difficult season into something your future self can hold with more context.

## How it works

Letterly is designed to keep the writing flow simple.

First, write your letter. You can give it a subject, write freely, and add an image if the memory needs more than words. If you are stuck, the "Need a spark?" prompt can help you find a starting point.

Next, choose a delivery date. Letterly gives you quick options like 6 months, 1 year, 3 years, 5 years, and 10 years, or you can pick a specific date.

Then choose where the letter should go. If you are writing anonymously, Letterly sends a one-time verification code before the letter is sealed. That keeps the delivery destination intentional and helps prevent misuse.

Finally, seal it. Once a letter is scheduled, it is meant to stay sealed. The point is not to keep editing the past until it sounds better. The point is to preserve the moment as honestly as you wrote it.

![Letterly composer interface](/blog/letterly-hero.png)

## Private by default

Letterly is built around personal reflection, so privacy could not be an afterthought.

Letters are encrypted before storage. At delivery time, Letterly's automated delivery system decrypts the message so it can be sent by email. After a successful private delivery, the encrypted letter content is purged and only limited operational metadata remains.

That distinction matters. We are not claiming magic. Email delivery requires the system to send readable email at the scheduled time. What we are building is a practical privacy model: encrypted storage, careful delivery controls, limited metadata, and no casual in-app browsing of sealed letters.

By default, your letters are private. If you choose to make a letter public, it is not published immediately, and it is not published automatically when delivered. Public letters are opt-in, anonymous by default, and reviewed before they can appear in a public archive.

## Built for real delivery

A future letter product is only meaningful if it takes delivery seriously.

Behind the simple writing experience, Letterly includes the operational pieces needed to make scheduled delivery dependable: email verification, delivery jobs, retry handling, failed-delivery visibility, attachment handling, and content cleanup after successful delivery.

Most of that should stay invisible when everything works. You should not have to think about queues, retries, encryption keys, or storage buckets when you are writing to your future self.

But we had to think about them. A promise to deliver something later is still a promise.

## What you can use it for

Letterly can be whatever kind of time capsule you need it to be.

- Write to yourself one year from now.
- Capture the beginning of a new job, relationship, move, or project.
- Send encouragement to yourself before a difficult season.
- Set goals and send them to the future version of you who will know what happened.
- Preserve a memory with a photo attached.
- Send a future note to someone else after verifying the destination.

Some letters will be serious. Some will be funny. Some will be awkward in the best way. That is part of the charm. The future rarely needs a perfectly edited version of you. It needs the honest one.

## What comes next

This launch is the beginning of Letterly, not the final shape of it.

We want to keep improving the writing experience, the long-term delivery infrastructure, and the ways people can safely preserve memories without turning the product into another place they have to manage.

The principle will stay the same: Letterly should feel calm, private, and intentional. It should help you write something meaningful, seal it, and trust that it will come back when the time is right.

## Start writing

You can try Letterly today by [sending a letter to your future self](https://useletterly.com), you'll be grateful you did.

We hope it finds you at exactly the right time.
