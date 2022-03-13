I - Pre-rendering:
Theo mặc định , Nextjs pre-rendering mỗi page.
Có nghĩa là Nextjs sẽ tạo trước HTML cho từng trang, thay vì để tất cả được thực hiện với js phía client
Mỗi lần tạo HTML sẽ được liên kết với code js cần thiết cho page đó.
II - Có 2 cách pre-rendering:

1. Static genetation: HTml được tạo ở thời điểm build time và sẽ tái sử dụng theo từng yêu cầu.
2. Server-side rendering: HTML sẽ được tạo ở mỗi request
   lần dùng static generation để có performance tốt hơn
3. Static generation with data:
   Một số trang yêu cầu nạp dữ liệu từ bên ngoài để pre-rendering và Nextjs cung cấp 1 số functions

- Nội dung của page phụ thuọc vào dữ liệu bên ngoài: sử dụng getStaticProps
- Đường dẫn của bạn phụ thuộc vào dữ liệu bên ngoài sử dụng getStaticPaths (thường được thêm vào getStaticProps)

---

function Blog({ posts }) {
// Render posts...
}

// This function gets called at build time
export async function getStaticProps() {
// Call an external API endpoint to get posts
const res = await fetch('https://.../posts')
const posts = await res.json()

// By returning { props: { posts } }, the Blog component
// will receive `posts` as a prop at build time
return {
props: {
posts,
},
}
}

## export default Blog
