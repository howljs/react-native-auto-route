(self.webpackChunkauto_route=self.webpackChunkauto_route||[]).push([[664],{3855:(e,t,r)=>{var a,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,p=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of l(t))u.call(e,n)||n===r||o(e,n,{get:()=>t[n],enumerable:!(a=i(t,n))||a.enumerable});return e},c=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>b}),e.exports=(a=d,p(o({},"__esModule",{value:!0}),a));var h=((e,t,r)=>(r=null!=e?n(s(e)):{},p(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(7294));const m="64px",g={};class b extends h.Component{constructor(){super(...arguments),c(this,"mounted",!1),c(this,"state",{image:null}),c(this,"handleKeyPress",(e=>{"Enter"!==e.key&&" "!==e.key||this.props.onClick()}))}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:r}=this.props;e.url===t&&e.light===r||this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage({url:e,light:t,oEmbedUrl:r}){if(!h.default.isValidElement(t))if("string"!=typeof t){if(!g[e])return this.setState({image:null}),window.fetch(r.replace("{url}",e)).then((e=>e.json())).then((t=>{if(t.thumbnail_url&&this.mounted){const r=t.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:r}),g[e]=r}}));this.setState({image:g[e]})}else this.setState({image:t})}render(){const{light:e,onClick:t,playIcon:r,previewTabIndex:a}=this.props,{image:n}=this.state,o=h.default.isValidElement(e),i={display:"flex",alignItems:"center",justifyContent:"center"},l={preview:{width:"100%",height:"100%",backgroundImage:n&&!o?`url(${n})`:void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...i},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:m,width:m,height:m,position:o?"absolute":void 0,...i},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},s=h.default.createElement("div",{style:l.shadow,className:"react-player__shadow"},h.default.createElement("div",{style:l.playIcon,className:"react-player__play-icon"}));return h.default.createElement("div",{style:l.preview,className:"react-player__preview",onClick:t,tabIndex:a,onKeyPress:this.handleKeyPress},o?e:null,r||s)}}}}]);