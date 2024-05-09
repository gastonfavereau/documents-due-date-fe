export default function RootLayout({ children,}) 

{
  return (
  <div className="ly-client-div-main">
    <div className="ly-client">
        <a href="">Este es navbar de los clientes</a>
      </div>
    {children}
  </div>
  );
}
