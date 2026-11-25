// 프롬프트 복사 버튼
const copyButton = document.getElementById('copyButton');
const promptText = document.getElementById('promptText');
const toast = document.getElementById('toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(promptText.value);
  } catch {
    promptText.select();
    document.execCommand('copy');
  }
  copyButton.textContent = '복사됨 ✓';
  showToast('프롬프트를 복사했어요. AI 채팅에 붙여넣으세요.');
  setTimeout(() => (copyButton.textContent = '프롬프트 복사'), 1800);
});
