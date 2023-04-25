import Button from "./Button";

const Main = () => {

  return (
    <main className='main'>
      <section className='section one d-flex flex-column align-items-center align-items-sm-start'>
        <h1 className='title primary text-center text-sm-start'>Next generation digital banking</h1>
        <p className='para primary text-center text-sm-start'>Take your financial life online. Your Easybank account will be a one-stop-shop 
        for spending, saving, budgeting, investing, and much more.</p>
        <Button />
      </section>
      <section className='section two'>
        <div className='d-flex flex-column align-items-center align-items-sm-start'>
          <h2 className='title secondary text-center text-sm-start'>Why choose Easybank?</h2>
          <p className='para primary text-center text-sm-start'>We leverage Open Banking to turn your bank account into your financial hub. Control
          your finances like never before.</p>
        </div>
        <div className='wrapper d-flex flex-column align-items-center flex-sm-row align-items-sm-stretch mt-4'>
          <div className='d-flex flex-column align-items-center align-items-sm-start'>
            <ReactBootstrap.Image alt='online icon' className='icon' src='./src/images/icon-online.svg' />
            <h3 className='title tertiary text-center text-sm-start my-3'>Online Banking</h3>
            <p className='para primary text-center text-sm-start'>Our modern web and mobile applications allow you to keep track of your finances
            wherever you are in the world.</p>
          </div>
          <div className='d-flex flex-column align-items-center align-items-sm-start'>
            <ReactBootstrap.Image alt='budgeting icon' className='icon' src='./src/images/icon-budgeting.svg' />
            <h3 className='title tertiary text-center text-sm-start my-3'>Simple Budgeting</h3>
            <p className='para primary text-center text-sm-start'>See exactly where your money goes each month. Receive notifications when you’re
            close to hitting your limits.</p>
          </div>
          <div className='d-flex flex-column align-items-center align-items-sm-start'>
            <ReactBootstrap.Image alt='onboarding icon' className='icon' src='./src/images/icon-onboarding.svg' />
            <h3 className='title tertiary text-center text-sm-start my-3'>Fast Onboarding</h3>
            <p className='para primary text-center text-sm-start'>We don’t do branches. Open your account in minutes online and start taking control
            of your finances right away.</p>
          </div>
          <div className='d-flex flex-column align-items-center align-items-sm-start'>
            <ReactBootstrap.Image alt='api icon' className='icon' src='./src/images/icon-api.svg' />
            <h3 className='title tertiary text-center text-sm-start my-3'>Open API</h3>
            <p className='para primary text-center text-sm-start'>Manage your savings, investments, pension, and much more from one account. Tracking
            your money has never been easier.</p>
          </div>
        </div>
      </section>
      <section className='section three'>
        <h2 className='title secondary text-center text-sm-start'>Latest Articles</h2>
        <div className='wrapper d-flex flex-column align-items-center flex-sm-row align-items-sm-stretch'>
          <div className='d-flex flex-column align-items-start'>
            <ReactBootstrap.Image alt='currency' className='image currency' src='./src/images/image-currency.jpg' />
            <p className='para secondary m-0 px-4 pt-4'>By Claire Robinson</p>
            <h4 className='title quaternary m-0 px-4 py-2'>Receive money in any currency with no fees</h4>
            <p className='para secondary m-0 px-4 pb-4'>The world is getting smaller and we’re becoming more mobile. So why should you be 
            forced to only receive money in a single…</p>
          </div>
          <div className='d-flex flex-column align-items-start'>
            <ReactBootstrap.Image alt='restaurant' className='image' src='./src/images/image-restaurant.jpg' />
            <p className='para secondary m-0 px-4 pt-4'>By Wilson Hutton</p>
            <h4 className='title quaternary m-0 px-4 py-2'>Treat yourself without worrying about money</h4>
            <p className='para secondary m-0 px-4 pb-4'>Our simple budgeting feature allows you to separate out your spending and set 
            realistic limits each month. That means you…</p>
          </div>
          <div className='d-flex flex-column align-items-start'>
            <ReactBootstrap.Image alt='plane' className='image' src='./src/images/image-plane.jpg' />
            <p className='para secondary m-0 px-4 pt-4'>By Wilson Hutton</p>
            <h4 className='title quaternary m-0 px-4 py-2'>Take your Easybank card wherever you go</h4>
            <p className='para secondary m-0 px-4 pb-4'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
            while you’re abroad. We’ll even show you…</p>
          </div>
          <div className='d-flex flex-column align-items-start'>
            <ReactBootstrap.Image alt='confetti' className='image' src='./src/images/image-confetti.jpg' />
            <p className='para secondary m-0 px-4 pt-4'>By Claire Robinson</p>
            <h4 className='title quaternary m-0 px-4 py-2'>Our invite-only Beta accounts are now live!</h4>
            <p className='para secondary m-0 px-4 pb-4'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
            It’s easy to request an invite through the site…</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main;