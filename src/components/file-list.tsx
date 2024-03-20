type FileListProps = {
  files: Array<File>;
};

export const FileList = ({ files }: FileListProps) => {
  return (
    <div className="file-list-container">
      {files.map((file) => (
        <div className="file-list-item">
          <span>{file.name}</span>
          <span>{formatFileSize(file.size)}</span>
        </div>
      ))}
    </div>
  );
};

function formatFileSize(size: number) {
  return `${(size / Math.pow(1024, 2)).toFixed(2)} MB`;
}
