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
export default function TailWindApp(){
  return(
    <SearchBar/>
  );
}