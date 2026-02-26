import "./index.css";

function SimpleButton(){
  return(
    <div className="p-10">
      <button
        type="button"
        className=
        "bg-blue-500 text-white rounded-full px-6 py-2 shadow-md hover:bg-blue-600 transition-all duration-100 active:translate-y-0.5 active:duration-75" 
      >
        クリック
      </button>
    </div>
  );
}
type NotificationBadgeProps = {
  status:"error"|"success";
}
function NotificationBadge({status}:NotificationBadgeProps){
  const NotificationColor = status === "success" ? "bg-green-500" : "bg-red-500";
  return(
    <div className="bg-green-200 w-fit mx-10 px-10 py-3 rounded-full flex items-center gap-4 ring-1 ring-green-400 shadow-md">
      <div className={`w-5 h-5 ${NotificationColor} rounded-full animate-pulse`}>
      </div>
      <p className="text-green-800 font-mono text-xs tracking-tight">
        sample message
      </p>
    </div>
  );
}
function BoxStudy(){
  return(
    <div className="space-y-8">
      <div className="w-20 h-20 bg-blue-100 rounded-sm">
      </div>
      <div className="w-32 h-32 bg-blue-500 rounded-lg">
      </div>
      <div className="w-48 h-48 bg-blue-900 rounded-full">
      </div>
    </div>
  );
}
function PrimaryButton(){
  return(
    <div>
      <button
        type="button"
        className="w-40 h-16 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center text-gray-200"
        >
        保存
      </button>
    </div>
  );
}
function Text(){
  return(
    <div className="w-auto bg-blue-500 border border-black/20 shadow-md">
      <div className="w-full  bg-white/30 backdrop-blur-sm flex flex-col items-center gap-2 hover:bg-white/50 transition-all duration-500 cursor-pointer">
        <h2 className="text-3xl font-extrabold italic">
          Heading
        </h2>
        <p className="text-base leading-relaxed">
          sample sample sample sample
        </p>
        <p className="text-[10px] text-gray-700">
          aaaaa aaaaaaa aaaaa
        </p>
      </div>
    </div>
  );
}

function SimpleRow(){
  return(
    <div className="flex items-center gap-2 p-4 bg-gray-100 w-fit">
      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
      <span className="text-gray-700 font-medium">設定</span>
    </div>
  );
}
function SimpleMenu(){
  return(
    <div className="flex items-center gap-3 p-3 bg-white w-fit hover:bg-gray-200 rounded-lg cursor-pointer transition-colors duration-200 group">
      <div className="w-8 h-8 rounded-md bg-gray-200 group-hover:bg-blue-100 transition-colors"></div>
      <span className="text-sm">プロフィール</span>
    </div>
  );
}
//group を親要素に書くと子要素のgroup-*:が親要素に乗った時にも反応するようになる

function NotificationItem(){
  return(
    <div className="flex gap-4 rounded-lg w-full max-w-lg border border-gray-100">
      <div className="shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
        !
      </div>
      <div className="flex  flex-col items-center">
        <h3 className="font-bold text-gray-900">アップデート完了</h3>
        <p className="text-xs text-gray-500">システムは最新です</p>
      </div>
    </div>
  );
}

function HeaderRow(){
  return(
    <div className="flex items-center justify-between p-4 bg-white w-full">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-indigo-600 rounded"></div>
        <span className="font-bold">Project A</span>
      </div>
      <span className="text-xs text-gray-400">2026/02/25</span>
    </div>
  );
}
function TaskCard(){
  return(
    <div className="flex items-center justify-between p-4 rounded-md bg-gray-50">
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 bg-blue-500 rounded-sm flex items-center justify-center text-white">✓</div>
        <div className="flex flex-col">
          <p className="shrink-0 text-sm text-gray-900 font-semibold">sample task</p>
          <p className="text-sm text-gray-700">2026/3/2</p>
        </div>
      </div>
      <div className="shrink-0 w-fit px-2 py-1 rounded-sm border border-red-400 text-red-600 bg-red-100 text-[10px] font-mono flex items-center justify-center">
        重要
      </div>
    </div>
  );
}
function NotificationIcon(){
  return(
    <div className="relative w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
      <span className="text-xl">🔶</span>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
    </div>
  );
}
function OnlineStatus(){
  return(
    <div className="w-16 h-16 relative">
      <div className="w-full  h-full bg-gray-300 rounded-full flex justify-center items-center border-2 border-gray-100">
        User
      </div>
      <div className="absolute top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
    </div>
  );
}
function ImageCardBase(){
  return(
    <div className="w-48 bg-white rounded-2xl overflow-hidden shadow-md border">
      <div className="h-32 bg-blue-400"></div>
      <div className="p-4">
        <p className="font-bold text-sm">カードタイトル</p>
      </div>
    </div>
  );
}
function ProgressBar(){
  return(
    <div className="flex items-center gap-2 p-2">
      <div className="bg-gray-200 w-64 h-4 rounded-full overflow-hidden group">
        <div className="h-full bg-indigo-600 w-0 group-hover:w-[70%] transition-all duration-1000"></div>
      </div>
      <p className="text-xs">70%</p>
    </div>
  );
}
function CardGrid(){
  return(
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="bg-blue-100 p-4 rounded">Card 1</div>
      <div className="bg-blue-200 p-4 rounded">Card 2</div>
      <div className="bg-blue-300 p-4 rounded">Card 3</div>
      <div className="bg-blue-400 p-4 rounded">Card 4</div>
    </div>
  );
}
const colors = [
    { name: "red", class: "bg-red-600" },
    { name: "green", class: "bg-green-600" },
    { name: "blue", class: "bg-blue-600" },
    { name: "indigo", class: "bg-indigo-600" },
  ];
//tailwindでは完全なクラス名がないといけない（動的にクラスを作成してはいけない）
function ColorGallery(){
  return(
    <div className="grid grid-cols-4 gap-2">
      {colors.map(color => {
        return(
          <div className={`${color.class} rounded-md hover:scale-110 cursor-pointer aspect-square p-2`} key={color.class}>
            Color: {color.class}
          </div>
        );
      })}
    </div>
  );
}
function UserRow(){
  return(
    <div className="flex justify-start items-center gap-3 p-4 bg-gray-500 border rounded-lg shadow-sm">
      <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center font-bold">
        Y
      </div>
      <span className="font-medium text-gray-800">Yamada Taro</span>
      <button className="ml-auto px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 border border-gray-300 text-gray-600 transition-all shadow-md active:shadow-none active:translate-y-0.5">
        編集
      </button>
    </div>
  );
}
function MessageItem(){
  const date = new Date();
  const dateMessage = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
  return(
    <div className="flex items-center  p-4 bg-white border-b border-gray-300 gap-4">
      <div className="w-12 h-12 rounded-full bg-indigo-500 shrink-0"></div>
      <div className="flex flex-col gap-1">
        <p className="font-bold">エンジニア太郎</p>
        <p className="text-sm text-gray-500">了解しました!</p>
      </div>
      <div className="ml-auto text-xs text-gray-400">
        {dateMessage}
      </div>
    </div>
  );
}
function SimpleInput(){
  return(
    <div className="flex flex-col p-6 bg-gray-50 gap-1">
      <label
        htmlFor="email-input"
        className="text-sm font-medium text-gray-700"
      >
        メールアドレス
      </label>
      <input
        type="email" placeholder="example@gmail.com"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-blue-500 transition-all"
      />
    </div>
  );
}
function SearchBar(){
  return(
    <div className="max-w-md relative">
      <input 
        type="text"
        className="border-none shadow-md w-full rounded-full py-3 pl-14 pr-4 focus:ring-2 focus:ring-indigo-400 transition-all focus:outline-none"
      />
      <div className="absolute top-1/2 left-4 -translate-y-1/2 text-gray">検索:</div>
    </div>
  );
}
//absolute top-1/2 -translate-y-1/2　これでアイコンとかを検索窓にかぶせることができる
function StatusBadge(){
  return(
    <span className="inline-flex items-center px-2.5 py-0.5 bg-green-100 rounded-full text-xs text-green-800 font-medium whitespace-nowrap leading-none
        hover:bg-green-300 cursor-pointer">
      稼働中
    </span>
  );
}

function NotificationTab(){
  return(
    <div className="flex gap-8 px-3 py-4">
      <div className="relative inline-flex items-center">
        <p className="bg-indigo-200 text-gray-600 font-bold text-md px-2 py-1 rounded-lg hover:bg-indigo-400 hover:text-gray-800 transition-all duration-100 cursor-pointer">
          メッセージ1
        </p>
        <div className="absolute -top-2 -right-2.5 w-5 h-5 bg-red-500 text-white text-xs font-mono flex items-center justify-center leading-none rounded-full border border-gray-300">
          1
        </div>
        
      </div>
            <div className="relative inline-flex items-center">
        <p className="bg-indigo-200 text-gray-600 font-bold text-md px-2 py-1 rounded-lg hover:bg-indigo-400 hover:text-gray-800 transition-all duration-100 cursor-pointer">
          メッセージ2
        </p>
        <div className="absolute -top-2 -right-2.5 w-5 h-5 bg-red-500 text-white text-xs font-mono flex items-center justify-center leading-none rounded-full border border-gray-300">
          1
        </div>
        
      </div>
            <div className="relative inline-flex items-center">
        <p className="bg-indigo-200 text-gray-600 font-bold text-md px-2 py-1 rounded-lg hover:bg-indigo-400 hover:text-gray-800 transition-all duration-100 cursor-pointer">
          メッセージ3
        </p>
        <div className="absolute -top-2 -right-2.5 w-5 h-5 bg-red-500 text-white text-xs font-mono flex items-center justify-center leading-none rounded-full border border-gray-300">
          1
        </div>
        
      </div>
    </div>
  );
}

function AvatarStack(){
  return(
    <div className="flex -space-x-4">
      <div className="w-10 h-10 rounded-full border-2 border-gray-200 bg-blue-400 z-10 hover:z-50 transition-all"></div>
      <div className="w-10 h-10 rounded-full border-2 border-gray-200 bg-green-400 z-20 hover:z-50 transition-all"></div>
      <div className="w-10 h-10 rounded-full border-2 border-gray-200 bg-yellow-400 z-30 hover:z-50 transition-all"></div>
    </div>
  );
}
function StackCard(){
  return(
    <div className="relative w-64 h-40 m-5">
      <div className="absolute top-4 right-4 w-full h-full bg-gray-200 rounded-xl z-0"></div>
      <div className="absolute top-0 right-0 w-full h-full border bg-white border-gray-300 shadow-xl rounded-xl z-10
      hover:-translate-y-2 hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center">
        メインコンテンツ
      </div>
    </div>
  );
}

function PhotoBadge(){
  return(
    <div className="w-64">
      <div className="h-40 bg-blue-200 rounded-lg"></div>
      <div className="-mt-6 ml-4 w-fit py-2 bg-black text-white rounded-md shadow-md rotate-2 cursor-pointer">
        New Arrival
      </div>
    </div>
  );
}
function MemoCard(){
  return(
    <div className="relative w-64 h-64 bg-yellow-50 p-3 shadow-md border border-gray-200 m-10 group cursor-pointer">
      <p>今日のタスク</p>
      <p className="absolute -top-3 -right-3 bg-gray-300 px-3 py-1 rounded-md shadow-md rotate-3 group-hover:rotate-0 transition-all">sample memo</p>
    </div>
  );
}

function ArticleImage(){
  return(
    <div className="w-80 border rounded-xl overflow-hidden bg-white cursor-pointer shadow-xl">
      <img 
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="PC"
        className="w-full aspect-video object-cover"
      />
      <div className="p-4">
        <p className="font-bold">Tailwindの実践テクニック</p>
      </div>
    </div>
  );
}//object-cover これは縦横比を変えずに拡大縮小してくれる

function ZoomPhoto(){
  return(
    <div className="relative min-w-77 w-full rounded-2xl overflow-hidden border-2 border-gray-400 shadow-lg cursor-pointer group">
      <img 
        src="https://picsum.photos/400" alt="" 
        className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <a href="https://google.com" className="absolute bottom-4 left-4 text-white font-bold shadow-md bg-gray-500/40 px-2 py-1 rounded-md hover:bg-gray-500/90 transition-colors duration-100">詳細</a>
    </div>
  );
}

function ResponsiveList(){
  return(
    <div>
      
      <div className="relative container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="bg-blue-300 p-6 rounded-lg shadow  text-center">Card1</div>
          <div className="bg-blue-400 p-6 rounded-lg shadow  text-center">Card2</div>
          <div className="bg-blue-500 p-6 rounded-lg shadow  text-center">Card3</div>
        </div>
      </div>
    </div>

  );
}

function ResponsivePhoto(){
  const array = new Array(10).fill(null);
  return(
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-3xl font-bold w-fit bg-linear-to-r from-amber-600 to-yellow-500 px-4 pt-2 pb-4 rounded-lg shadow-2xl text-gray-200 leading-none">My Gallery</h2>
      <div className="container mim-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {array.map((_, index)=><ZoomPhoto key={index}/>)}
        </div>
      </div>
    </div>
  );
}

export default function TailWindApp(){
  return(
    <ResponsivePhoto/>
  );
}