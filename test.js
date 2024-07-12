const items: any = [
  {
    key: 1,
    label: (
      <li className="bg-gray-100 w-full px-4 py-4">
        <AccountDropdownPanelDesc
          email={props.email}
          userId={props.userId}
          userKind={props.userKind}
        ></AccountDropdownPanelDesc>
      </li>
    ),
  },
  {
    key: 2,
    label: (
      <li className="px-0 py-0 w-full">
        <AccountDropdownPanelMenu></AccountDropdownPanelMenu>
      </li>
    ),
  },
  {
    key: 3,
    label: (
      <li className="px-4 py-4">
        <button
          className="w-full ring-1 ring-gray-100 text-sm py-2 rounded-sm hover:ring-sky-500 hover:shadow-lg"
          onClick={() => {
            isBrowser() && window.localStorage.clear();
            props.router.push("/logout");
          }}
        >
          退出登录
        </button>
      </li>
    ),
  },
];
