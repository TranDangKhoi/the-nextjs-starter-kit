# NextJS

NextJS là một React framework, vì nó được gọi là "framework" nên ta sẽ không cần cài thư viện để routing, SEO improvements, SSR, ...v.v và đặc biệt là khâu setup sẽ bớt nhọc.

# Routes trong NextJS

Index routes: Là trang chỉ mục của một route, ví dụ trang web ta có 3 routes lần lượt là /blog, /about, /contact. Trong thư mục pages, ta sẽ tạo folder và tên của folder đó sẽ giống với tên route tương ứng.

Và bên trong mỗi folder đó sẽ có một **file chỉ mục**, bắt buộc phải đặt tên là `index.tsx`, như sau:

```bash
📦pages
┣ 📂blog
┃┗ 📜index.tsx
┣ 📂about
┃┗ 📜index.tsx
┣ 📂contact
┃┗ 📜index.tsx
```

Nested routes: một vài ví dụ /contact/company, /blog/edit

```bash
📦pages
┣ 📂blog
┃┣ 📜edit.tsx // New line
┃┗ 📜index.tsx
┣ 📂about
┃┗ 📜index.tsx
┣ 📂contact
┃┣ 📜company.tsx // New line
┃┗ 📜index.tsx
```

Dynamic routes: một vài ví dụ /blog/du-lich-mien-tay-cung-bear-grylls, /user/zzFWQOS1252. Vậy đằng sau /blog và /user chính là slug và id, ta có thể hiểu là `/blog/[slug]` và `/user/[id]`. Vì vậy tên thư mục cho các route này ta sẽ đặt là `[slug].tsx` hoặc `[id].tsx`.

```bash
📦pages
┣ 📂blog
┃┣ 📜edit.tsx
┃┗ 📜[slug].tsx // New line
┃┗ 📜index.tsx
┣ 📂about
┃┗ 📜index.tsx
┣ 📂contact
┃┣ 📜company.tsx
┃┗ 📜index.tsx
```

Dynamic routes 2.0 hay còn gọi là catch-all segments routes: Ví dụ `blog/what-are-chromosomes/jake-paul/bla-blo-bli`, mỗi một đoạn slug ngắn nằm sau dấu các `/` sẽ được coi là 1 segment, và các segment đó là `what-are-chromosomes`, `jake-paul`, `bla-blo-bli`

Và khi mà ta log ra phần query:

```tsx
const AboutAllSegments = () => {
  const router = useRouter();
  console.log(router);
  return <div>All Segments Route</div>;
};
```

Ta sẽ nhận được một kết quả query là một array chứa các phần tử là các segments nằm trên URL. Ví dụ một URL như sau: `http://localhost:3000/about/la-la-la/li-li-li`. Thì ta sẽ được kết quả query là `["la-la-la","li-li-li"]`

```bash
📦pages
┣ 📂post
┃┗ 📜[...slug].tsx // New line
```

## next.config.js

Đây là file config của NextJS, ta có thể thêm các config như sau:

```tsx
module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: "https://jsonplaceholder.typicode.com",
  },
};
```

Ngoài ra để approve domains để lấy đường dẫn ảnh từ các nguồn khác thì ta có thể config như sau:

```tsx
module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: "https://jsonplaceholder.typicode.com",
  },
  images: {
    domains: ["jsonplaceholder.typicode.com"],
  },
};
```

## getStaticProps

Đây là một function có thể được export từ một page, nó sẽ chạy trước khi component được render. Và nó sẽ trả về một object có dạng như sau:

```tsx
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: [],
    },
  };
};
```
