import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Hello</title>
      </head>
      <body>
        <div
          className={styles.header}
        >From layout</div>
        <div>
          {children}
        </div>
      </body>
    </html>)
}