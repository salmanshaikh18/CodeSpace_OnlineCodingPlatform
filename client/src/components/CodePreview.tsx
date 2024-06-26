import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

const CodePreview = () => {
  const fullCode = useSelector(
    (state: RootState) => state.codeEditorSlice.fullCode
  );
  const combinedCode = `
    <html>
    <style>${fullCode.css}</style>
    <body>${fullCode.html}</body>
    <script>${fullCode.javascript}</script>
    </html>
    `;

  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCode
  )}`;
  return (
    <div className="h-full w-full">
      <iframe
        src={iframeCode}
        className="bg-zinc-200 text-black w-full h-full max-h-[calc(100vh-60px-50px)]"
      />
    </div>
  );
};

export default CodePreview;
