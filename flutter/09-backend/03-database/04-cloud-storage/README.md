# Cloud Storage

Local storage is amazing, but apps shine when users can interact with each other.

This is where cloud storage comes in. Instead of storing the data on the device, the data is stored on a remote server that is used by all the users.

## Pros and Cons of Cloud Storage

The biggest pro is that this unlocks a whole new world of features for your application.

The biggest con is that this requires a server. This means you need to either pay for a service to host the server or host it yourself which is a lot of work.

It is also slower than local storage because the request takes some time to travel to the server and back.

## Options for Cloud Storage

The most popular options for cloud storage are `firebase`, `supabase`, and `appwrite`.

These are all paid services, but they have a generous free tier so you can try them out without spending any money.

The big selling point of these products is that they make it easy to use within your application, and you don't have to worry about the underlying infrastructure.

But you can create your server. This comes with a lot more complexity, but it also gives you a lot more control (and it's fun to create your server).

Part of this platform is running on our servers, and we are moving more and more of the platform to our own servers. Let us know if you would want an in-depth course covering how to create your own backend.

## Caching

No matter what approach you take for cloud storage, you will need to implement caching and offline support. This is because networks are unreliable and you need to be able to continue using the app even if the network is down.

If the network is down at any point, the data should be stored on the device and then synced once the network is available.

You do this by caching the data locally and then syncing it to the cloud. Services like `firebase` and `supabase` have built-in caching so you don't need to worry about it.

## Quiz

**1. What is the primary advantage of cloud storage over local storage?**

- A) It speeds up data retrieval by avoiding network latency.
- B) It eliminates the need for device storage entirely.
- C) It automatically backs up data with no additional configuration.
- D) It allows data to be shared among multiple users and enables interactive applications.

<details>
<summary>Answer</summary>

- D) It allows data to be shared among multiple users and enables interactive applications.

</details>

**2. What is one major drawback of using cloud storage?**

- A) It eliminates offline access for users.
- B) It can be slower as data must travel to a remote server and back.
- C) It limits the application’s ability to operate across multiple devices.

<details>
<summary>Answer</summary>

- B) It can be slower as data must travel to a remote server and back.

</details>

**3. What is the primary purpose of implementing caching in cloud storage applications?**

- A) To permanently store data only on the cloud.
- B) To enable offline access by temporarily storing data locally and syncing once the network is available.
- C) To negate the need for a remote server entirely.
- D) To ensure data security through encryption.

<details>
<summary>Answer</summary>

- B) To enable offline access by temporarily storing data locally and syncing once the network is available.

</details>

---

[← Course overview](../../../README.md)
