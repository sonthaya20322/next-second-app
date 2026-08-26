export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <h1>Products Layout</h1>
            <hr />
            {children}
        </section>
    );
}