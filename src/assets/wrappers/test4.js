<nav>
  <div className="nav-center">
    <article className="logo2">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
    </article>

    <article>
      <aside>
        <div className="nav-info-inner">
          <RxAvatar className="icon icon2" />
          <p>{users}</p>
          <IoMdArrowDropdown onClick={showNavToggle} className="icon" />
        </div>
      </aside>
    </article>
  </div>
</nav>;
