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
export default function TailWindApp(){
  return(
    <Text/>
  );
}