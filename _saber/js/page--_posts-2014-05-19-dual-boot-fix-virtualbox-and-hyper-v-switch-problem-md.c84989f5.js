(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{70:function(e,t,r){"use strict";r.r(t);var n=r(0),o=function(e){var t={attributes:{slug:"dual-boot-fix-virtualbox-and-hyper-v-switch-problem",layout:"post",title:"双引导解决VirtualBox与Hyper-V共存问题",date:"2014-05-19 22:04:00",updated:"2014-05-19 22:04:00",draft:!0,hidden:!0,comments:!1,excerpt:'<h3 id="%E9%97%AE%E9%A2%98%E6%8F%8F%E5%8F%99">问题描叙</h3>\n<p>因为WindowsPhone开发需要用到基于Hyper-V的Windows Phone Emulator，所以开启了Win8自带的Hyper-V虚拟机。而有多需求的我又安装了VirtualBox虚拟机来运行Linux和WinXP。\nHyper-V完全不能与VMware共存所以选了能与之“半共存”的VirtualBox，但由于基于hypervisor\n的Hyper-V太过“霸道”，一开机就会始终占据着hypervisor，即使开机后没打开Hyper-V，\nHyper-V也是“在后台始终虚拟着一些东西”，这就造成了与VMware不共存，以及造成VirtualBox\n“半废”：WinXP还是能打开的，简单软件也能用，但遇到需要VT-x指令集，和嵌套分页硬件虚拟化的软件（如SQLserver）时就傻逼了，至于Linux就完全不能了。</p>\n',createdAt:"2014-05-19T14:04:00.000Z",updatedAt:"2014-05-19T14:04:00.000Z",type:"post",permalink:"/blog/2014/05/dual-boot-fix-virtualbox-and-hyper-v-switch-problem"},contentType:"markdown"},r=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=t}].concat(r);var n=e.options.PageComponent;n&&(e.options.transition=n.transition),void 0===e.options.transition&&(e.options.transition=t.attributes.transition),e.options.name="page-wrapper-"+t.attributes.slug.replace(/[^0-9a-z\-]/i,"-")},a=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("layout-manager",{attrs:{page:e.$page}},[r("h3",{attrs:{id:"%E9%97%AE%E9%A2%98%E6%8F%8F%E5%8F%99"}},[e._v("问题描叙")]),e._v(" "),r("p",[e._v("因为WindowsPhone开发需要用到基于Hyper-V的Windows Phone Emulator，所以开启了Win8自带的Hyper-V虚拟机。而有多需求的我又安装了VirtualBox虚拟机来运行Linux和WinXP。\nHyper-V完全不能与VMware共存所以选了能与之“半共存”的VirtualBox，但由于基于hypervisor\n的Hyper-V太过“霸道”，一开机就会始终占据着hypervisor，即使开机后没打开Hyper-V，\nHyper-V也是“在后台始终虚拟着一些东西”，这就造成了与VMware不共存，以及造成VirtualBox\n“半废”：WinXP还是能打开的，简单软件也能用，但遇到需要VT-x指令集，和嵌套分页硬件虚拟化的软件（如SQLserver）时就傻逼了，至于Linux就完全不能了。")]),e._v(" "),r("h3",{attrs:{id:"%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95"}},[e._v("解决方法")]),e._v(" "),r("p",[e._v("找遍了度娘和谷哥，只有一种方法能够解决这个共存问题：设置双引导。方法如下："),r("code",{pre:!0},[e._v("Win+X")]),e._v("调出菜单，选择"),r("strong",[e._v("命令提示符(管理员)")]),e._v("，依次敲入以下代码中的命令：")]),e._v(" "),r("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[r("pre",{pre:!0,attrs:{class:"saber-highlight-code"}},[r("code",{pre:!0,attrs:{class:""}},[e._v('C:\\Windows\\system32>bcdedit /set {current} hypervisorlaunchtype off\n操作成功完成。\n\nC:\\Windows\\system32>bcdedit /copy {current} /d "Windows 8.1 with Hyper-V"\n已将该项成功复制到 {a7deccee-ce33-11e3-bea9-a1553aac30e7}。\n\nC:\\Windows\\system32>bcdedit /set {a7deccee-ce33-11e3-bea9-a1553aac30e7} hypervis\norlaunchtype auto\n操作成功完成。')])])]),r("p",[e._v("注意：第三行命令中的"),r("code",{pre:!0},[e._v("{a7deccee-ce33-11e3-bea9-a1553aac30e7}")]),e._v("是根据第二行给出的，请自行替换。原理：禁用当前环境的hypervisor，然后拷贝当前引导副本，再开启此副本的\nhypervisor。最后开机会显示双引导如下图：")]),e._v(" "),r("p",[e._v("我默认选择的是禁用hypervisor的引导，因为相对比较常用这一个，若需求不同可自行修改默认引导。另外此方法同样适用于安装有Android GenyMotion虚拟机同时又需要使用Hyper-V的童鞋。算是勉强缓解一下需求了。就酱紫吧。")])])},[],!1,null,null,null);"function"==typeof o&&o(a);t.default=a.exports}}]);