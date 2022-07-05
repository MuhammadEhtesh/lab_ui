const base64ToUint8Array = (string) => {
    var raw = atob(string);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));
    for (var i = 0; i < rawLength; i += 1) {
        array[i] = raw.charCodeAt(i);
    }
    return array;
};

export const exportToExcel = (byteData, filename) => {
    if(!byteData)return;
    const sample_data = byteData;
    console.log('arraybyte8',base64ToUint8Array(sample_data));
    const fileBlob = new Blob([base64ToUint8Array(sample_data)], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(fileBlob);
    a.download = `${filename}.xlsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
