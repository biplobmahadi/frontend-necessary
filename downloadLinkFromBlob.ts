// Create blob link to download
const blobFile = new Blob()
const url = window.URL.createObjectURL(blobFile);
const link = document.createElement('a');
link.href = url;
link.setAttribute('download', `Employee Report.xlsx`);

// Append to html link element page
document.body.appendChild(link);

// Start download
link.click();

// Clean up and remove the link
link.parentNode?.removeChild(link);
