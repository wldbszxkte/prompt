'use strict';

// 단계 제목, 안내, 프롬프트를 이 데이터 영역에서 관리합니다.
const templates = {
  free: [
    {
      title: '내 게임 기획하기', description: '어떤 게임을 만들지, 가장 중요한 규칙부터 정해보세요.',
      check: '친구에게 “무엇을 해서 이기는 게임인지” 한 문장으로 설명해보세요.',
      prompt: `너는 내가 웹게임을 만들 수 있도록 도와주는 개발자야.
나는 중학생이고, HTML·CSS·JavaScript로 게임을 만들 거야.

내가 만들 게임은 다음과 같아.

- 게임 이름: [학생 작성]
- 플레이어는 누구인가?: [학생 작성]
- 어디에서 진행되는가?: [학생 작성]
- 플레이어가 반복해서 하는 행동: [학생 작성]
- 성공 조건: [학생 작성]
- 실패 조건: [학생 작성]
- 재미있을 것 같은 이유: [학생 작성]

아직 코드를 작성하지 마.
이 기획에서 빠졌거나 서로 맞지 않는 부분을 알려줘.
내가 결정할 수 있도록 필요한 질문을 해줘.
빈칸을 임의로 완성하지 말고, 막히는 부분에는 선택지 2~3개를 제안해줘.`
    },
    {
      title: '화면과 조작 정하기', description: '무엇을 보여주고, 어떻게 조작할지 생각해보세요.',
      check: '목업에서 바꾸고 싶은 부분을 찾아 요청하세요. 마음에 든다면 그 이유를 설명하세요.',
      prompt: `앞에서 정한 게임을 바탕으로 화면을 설계해줘.

- 가장 크게 보여줄 것: [학생 작성]
- 화면에 표시할 정보: [학생 작성]
- 이동 방법: [학생 작성]
- 주요 행동과 사용할 키: [학생 작성]
- 원하는 분위기와 색상: [학생 작성]

게임 시작 전 화면과 플레이 중 화면의 목업을 한 장의 이미지로 보여줘.
이미지를 만들 수 없다면 알려주고, 간단한 화면 배치로 제안해줘.

아직 코드를 작성하지 마.
내가 요청한 기능 중 구현하기 어렵거나 범위가 큰 부분이 있다면
간단한 대안을 제안해줘. 내 확인을 기다려줘.`
    },
    {
      title: '작은 첫 버전 만들기', description: '모든 기능 대신, 핵심 행동 하나부터 만들어보세요.',
      check: '직접 플레이하며 “되는 것 / 안 되는 것 / 예상과 다른 것”을 기록하세요.',
      prompt: `확정한 기획과 목업을 바탕으로 첫 버전을 만들어줘.

이번에 구현할 핵심 행동 하나:
[학생 작성]

그 행동의 규칙을 구체적으로 설명하면:
- 플레이어가 [학생 작성] 하면
- 게임은 [학생 작성] 해야 해.
- 단, [학생 작성]일 때는 할 수 없어.

행동이 성공했음을 알려줄 방법:
[학생 작성]

이번 버전에서 제외할 기능:
[학생 작성]

HTML, CSS, JavaScript는 각각 별도 파일로 관리해줘.
이미지가 필요하면 assets 폴더에 보관해줘.
처음에는 간단한 도형으로 만들어도 괜찮아.
규칙과 콘텐츠 데이터는 동작 코드와 구분해줘.

로그인이나 개인정보 입력은 넣지 마.
별도 서버 없이 브라우저에서 실행하고
GitHub와 Vercel로 배포할 수 있는 구조로 만들어줘.

완성하면 조작 방법과 실행 방법을 알려줘.
내가 직접 확인할 수 있는 질문도 3개 제시해줘.
변경과 관련된 기본 확인만 하고 같은 검증을 불필요하게 반복하지 마.`
    },
    {
      title: '발견한 문제 해결하기', description: '예상한 결과와 실제 결과를 비교해서 설명해보세요.',
      check: '문제를 일으켰던 행동을 다시 해보고 해결 여부를 확인하세요.',
      prompt: `직접 플레이해보니 다음 문제가 있어.

- 문제가 생기기 전 상황: [학생 작성]
- 내가 한 행동: [학생 작성]
- 예상한 결과: [학생 작성]
- 실제로 나온 결과: [학생 작성]

이 문제가 생기는 이유와 수정 방법을 먼저 설명해줘.
내가 확인하면 필요한 파일만 읽고 수정해줘.
변경한 파일만 전달해줘.

수정 후에는 내가 같은 문제가 해결됐는지
어떻게 확인하면 되는지 알려줘.`
    },
    {
      title: '나만의 기능 추가하기', description: '왜 필요한 기능인지, 언제 시작하고 끝나는지 정해보세요.',
      check: '추가한 기능이 원래 기능을 방해하지 않는지 직접 확인하세요.',
      prompt: `기본 동작이 완성됐으니 기능 하나를 추가하고 싶어.

- 추가할 기능: [학생 작성]
- 이 기능이 필요한 이유: [학생 작성]
- 기능이 시작되는 조건: [학생 작성]
- 시작되면 달라지는 것: [학생 작성]
- 끝나거나 멈추는 조건: [학생 작성]
- 플레이어에게 알려줄 방법: [학생 작성]

기존 기능과 충돌하는 부분이 있는지 확인해줘.
아직 수정하지 말고 구현 방법을 먼저 제안해줘.

내가 승인하면 필요한 파일만 수정하고,
핵심 코드 한 부분을 중학생이 이해할 수 있게 설명해줘.`
    },
    {
      title: '그래픽과 분위기 바꾸기', description: '멋진 모습과 알아보기 쉬운 화면을 함께 생각해보세요.',
      check: '“더 멋있어졌는가?”와 “더 알아보기 쉬워졌는가?”를 함께 확인하세요.',
      prompt: `게임 동작은 유지하면서 그래픽을 발전시키고 싶어.

- 현재 화면에서 아쉬운 부분: [학생 작성]
- 바꾸고 싶은 배경의 모습: [학생 작성]
- 캐릭터의 모습: [학생 작성]
- 필요한 움직임이나 효과: [학생 작성]
- 플레이할 때 잘 구분되어야 하는 것: [학생 작성]

먼저 변경할 화면의 목업을 보여줘.
이미지 생성이나 외부 자료 사용이 가능한지도 알려줘.
다른 게임의 캐릭터나 이미지를 그대로 사용하지 마.
사용하는 자료의 출처와 사용 권한을 확인해줘.

내가 승인하면 장면 하나에 먼저 적용해줘.
그림과 실제 이동·충돌 위치가 맞도록 해줘.
필요한 파일만 읽고 수정해줘.`
    },
    {
      title: '친구의 의견으로 개선하기', description: '조작법만 알려주고 친구가 플레이하는 모습을 살펴보세요.',
      check: '무엇을 왜 바꿨는지, 바꾼 뒤 어떤 점이 달라졌는지 발표해보세요.',
      prompt: `친구가 내 게임을 플레이한 결과야.

- 친구가 재미있어한 부분: [학생 작성]
- 친구가 이해하지 못한 부분: [학생 작성]
- 친구가 막힌 상황: [학생 작성]
- 내가 가장 먼저 고치고 싶은 것: [학생 작성]

가장 먼저 고칠 부분에 대해 수정안을 제안해줘.
수정이 필요한 이유와 예상되는 변화를 설명해줘.
내가 승인하면 필요한 파일만 읽고 수정해줘.

마지막으로 GitHub와 Vercel로 배포하는 방법을 알려줘.
배포를 직접 할 수 없다면 그 사실과 내가 해야 할 일을 설명해줘.`
    }
  ],
  night: [
    {
      title: '나만의 야간배송 설정하기', description: '공통 이야기를 바탕으로, 나만의 건물과 주인공을 정해보세요.',
      check: '어떤 건물에서 무슨 일이 일어나는 게임인지 한 문장으로 설명해보세요.',
      prompt: `너는 중학생인 내가 웹게임을 만들 수 있도록 돕는 개발자야.
나는 ‘야간배송’을 바탕으로 1인용 게임을 만들 거야.

[공통 게임 설정]
- 플레이어는 야간 배달원이야.
- 수상한 건물에서 택배 3개를 처리해야 해.
- 배송 메모의 규칙과 문 앞의 단서를 비교해
  택배를 배송하거나 반송하는 게임이야.
- 모든 택배를 처리하고 출입구로 돌아오는 것이 목표야.

[내가 정한 설정]
- 내 게임의 제목: [학생 작성]
- 건물의 이름: [학생 작성]
- 이 건물이 수상한 이유: [학생 작성]
- 주인공의 별칭과 모습: [학생 작성]
- 원하는 분위기: [학생 작성]

아직 코드를 작성하지 마.
내 설정을 정리하고, 더 결정해야 할 것을 질문해줘.
빈칸을 임의로 완성하지 마.
선택하기 어려운 부분에는 선택지 2~3개를 제안해줘.`
    },
    {
      title: '배송 규칙 직접 만들기', description: '적어도 한 집의 규칙은 AI에게 맡기지 않고 직접 작성해보세요.',
      check: '각 규칙이 화면에서 확인 가능한 단서와 연결되는지 확인하세요.',
      prompt: `이제 집마다 적용할 배송 규칙을 만들 거야.

규칙은 ‘화면에서 확인할 수 있는 단서’로 판단할 수 있어야 해.
플레이어가 추측만으로 정답을 골라야 하는 규칙은 피하고 싶어.

[첫 번째 집]
- 호수: [학생 작성]
- 배송해도 되는 조건: [학생 작성]
- 반송해야 하는 조건: [학생 작성]
- 화면에 실제로 나타날 단서: [학생 작성]

[두 번째 집]
- 호수: [학생 작성]
- 배송해도 되는 조건: [학생 작성]
- 반송해야 하는 조건: [학생 작성]
- 화면에 실제로 나타날 단서: [학생 작성]

[세 번째 집]
- 호수: [학생 작성]
- 배송해도 되는 조건: [학생 작성]
- 반송해야 하는 조건: [학생 작성]
- 화면에 실제로 나타날 단서: [학생 작성]

내가 작성한 규칙 중 애매하거나 서로 모순되는 것이 있는지 확인해줘.
빈칸은 바로 완성하지 말고, 내가 결정하도록 질문해줘.
작성하기 어렵다면 조명, 문패, 화분, 노크, 그림자처럼
단서의 종류만 제안하고 규칙은 내가 정하도록 도와줘.
아직 코드를 작성하지 마.`
    },
    {
      title: '화면과 조작 정하기', description: '복도와 세 집, 배송 메모가 보이는 화면을 설계해보세요.',
      check: '조작법과 배송 상태가 화면에서 쉽게 구분되는지 살펴보세요.',
      prompt: `앞에서 정한 야간배송 게임의 화면을 설계해줘.

[기본 구성]
- 작은 복도 1개와 집 3개
- 움직일 수 있는 배달원
- 배송 메모
- 배송·반송한 택배 수
- 게임을 끝내는 출입구

[내가 정할 부분]
- 이동에 사용할 키: [학생 작성]
- 문을 확인할 때 사용할 키: [학생 작성]
- 배송 메모를 배치할 위치: [학생 작성]
- 배송 완료를 알려줄 방법: [학생 작성]
- 원하는 화면 색감: [학생 작성]

시작 화면과 플레이 화면의 목업을 한 장의 이미지로 보여줘.
이미지를 만들 수 없다면 알려주고, 간단한 화면 배치로 제안해줘.
아직 코드를 작성하지 말고 내 확인을 기다려줘.`
    },
    {
      title: '한 집만 먼저 구현하기', description: '이동하고, 단서를 보고, 선택하는 기본 동작부터 만들어보세요.',
      check: '배송과 반송을 각각 해보고, 예상한 결과가 나오는지 확인하세요.',
      prompt: `확인한 목업으로 첫 버전을 만들어줘.

이번에는 아래 기능만 구현해줘.
- 배달원 이동
- 벽과 문을 통과하지 못하는 충돌 처리
- 첫 번째 집의 배송 메모와 단서
- 문 가까이에서 배송 또는 반송 선택
- 내 선택의 결과 표시

나머지 두 집과 엔딩은 아직 구현하지 마.
그래픽은 먼저 간단한 도형으로 만들어도 괜찮아.

[내가 정한 선택 결과]
- 올바르게 판단했을 때: [학생 작성]
- 잘못 판단했을 때: [학생 작성]

HTML, CSS, JavaScript는 각각 별도 파일로 관리해줘.
콘텐츠와 규칙 데이터는 동작 코드와 구분해줘.
필요한 이미지 파일은 assets 폴더에 보관해줘.

로그인·개인정보 입력·GPS·카메라는 사용하지 마.
별도 서버 없이 브라우저에서 실행하고
GitHub와 Vercel로 배포할 수 있게 만들어줘.

완성하면 실행 방법과 조작 방법을 알려줘.
직접 확인하는 데 필요한 기본 점검만 하고,
같은 검증을 불필요하게 반복하지 마.

내가 플레이하며 발견한 문제를 전달하면
원인과 수정 방법을 먼저 설명하고 필요한 파일만 수정해줘.`
    },
    {
      title: '게임을 끝까지 완성하기', description: '나머지 두 집과 출입구, 내가 정한 엔딩을 추가해보세요.',
      check: '중복 처리가 안 되는지, 세 택배를 처리한 뒤 엔딩까지 갈 수 있는지 확인하세요.',
      prompt: `첫 번째 집의 동작을 확인했어.
이제 내가 정한 나머지 두 집을 추가해줘.

- 각 집에 서로 다른 배송 규칙과 단서를 적용해줘.
- 같은 택배를 중복 처리하지 못하게 해줘.
- 택배 3개를 모두 처리하면 출입구에서 게임을 끝낼 수 있게 해줘.
- 결과 화면에 올바르게 판단한 개수를 표시해줘.
- 다시 시작하는 버튼을 넣어줘.

[내가 정한 엔딩]
- 모두 올바르게 판단했을 때의 결말: [학생 작성]
- 잘못 판단한 집이 있을 때의 결말: [학생 작성]

먼저 추가할 내용을 정리하고,
내가 승인하면 필요한 파일만 읽고 수정해줘.
변경한 파일만 전달해줘.`
    },
    {
      title: '나만의 차이 만들기', description: '손전등, 시간제한, 그래픽, 추격, 저장 중 하나를 선택해보세요.',
      check: '추가한 기능이 게임을 어떻게 바꿨는지 친구에게 설명하고 플레이를 부탁해보세요.',
      prompt: `내 야간배송 게임에 기능 하나를 추가하고 싶어.

- 선택한 기능: [학생 작성]
- 추가하려는 이유: [학생 작성]
- 작동하기 시작하는 조건: [학생 작성]
- 작동 중 플레이어가 해야 할 행동: [학생 작성]
- 끝나는 조건과 결과: [학생 작성]

선택할 수 있는 예시는 다음과 같아.
- 손전등: 비추는 범위, 조작법, 껐을 때의 밝기
- 제한 시간: 시간 길이, 시간이 끝나면 일어나는 일
- 무작위 사건: 바뀌는 단서와 그에 따른 정답
- 그래픽 개선: 배경·캐릭터의 모습과 필요한 움직임
- 추격: 시작 조건, 피하는 방법, 잡혔을 때의 결과
- 저장: 저장할 기록과 다시 접속했을 때 이어갈 내용

먼저 구체적인 구현 방법을 제안해줘.
범위가 너무 크면 작은 첫 버전으로 줄여서 제안해줘.
화면이 바뀐다면 목업을 먼저 보여줘.
내가 승인하면 필요한 파일만 읽고 수정해줘.

이미지를 사용한다면 다른 게임의 자료를 그대로 가져오지 마.
저장 기능을 만든다면 브라우저 데이터 삭제 시 기록이 사라지고
다른 기기로 자동 동기화되지 않는 한계도 설명해줘.

완성되면 GitHub와 Vercel로 배포하는 방법을 알려줘.`
    }
  ]
};

// BEGIN_SHARED_DATA
const SHARED_DATA = null;
// END_SHARED_DATA
const sourceURL = document.currentScript?.src || 'script.js';
const baseData = SHARED_DATA || { version: 1, revision: 'original', groups: [
  { id: 'free', title: '자유양식', description: '내 아이디어로 시작하기', steps: templates.free },
  { id: 'night', title: '야간배송', description: '기본 이야기를 바탕으로 만들기', steps: templates.night }
] };
const STORAGE_KEY = 'prompt-kit-editor-v1';
const $ = id => document.getElementById(id);
let groups = structuredClone(baseData.groups), storageAvailable = true;
function validateData(data) {
  if (data?.version !== 1 || !Array.isArray(data.groups) || data.groups.length < 1 || data.groups.length > 30) throw new Error('양식은 1~30개여야 합니다.');
  const ids = new Set();
  for (const group of data.groups) {
    if (typeof group.id !== 'string' || !/^[a-zA-Z0-9_-]{1,100}$/.test(group.id) || ['__proto__','constructor','prototype'].includes(group.id) || ids.has(group.id)) throw new Error('양식 ID가 올바르지 않습니다.');
    ids.add(group.id);
    if (typeof group.title !== 'string' || !group.title.trim() || group.title.length > 100 || typeof group.description !== 'string' || group.description.length > 500 || !Array.isArray(group.steps) || group.steps.length < 1 || group.steps.length > 100) throw new Error('양식 제목, 설명 또는 단계 수를 확인하세요.');
    for (const step of group.steps) {
      for (const [key, limit] of [['title',100],['description',500],['prompt',30000],['check',1000]]) {
        if (typeof step[key] !== 'string' || step[key].length > limit || (['title','prompt'].includes(key) && !step[key].trim())) throw new Error('단계 제목과 프롬프트는 필수이며 글자 수 제한을 지켜야 합니다.');
      }
    }
  }
  return data;
}
try {
  const local = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (local && local.baseRevision === baseData.revision) groups = validateData(local).groups;
} catch (_) { storageAvailable = false; }
const state = { mode: groups[0].id, steps: Object.create(null) };
let editorContext = null;
function currentGroup() { return groups.find(group => group.id === state.mode); }
function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({version:1, baseRevision:baseData.revision, groups})); storageAvailable = true; }
  catch (_) { storageAvailable = false; }
  $('storageNotice').textContent = storageAvailable
    ? '편집 내용은 이 브라우저에 저장됩니다. 학생들에게도 반영하려면 ‘공유용 script.js 받기’로 받은 파일을 GitHub의 script.js와 교체하세요. 서버에 자동으로 저장되지는 않습니다.'
    : '브라우저 저장을 사용할 수 없습니다. 창을 닫기 전에 ‘백업 저장’ 또는 ‘공유용 script.js 받기’로 변경 내용을 보관하세요.';
}
let toastTimer, labelTimer;
function currentSteps() { return currentGroup().steps; }
function render() {
  state.steps[state.mode] = Math.max(0, Math.min(state.steps[state.mode] || 0, currentSteps().length - 1));
  const steps = currentSteps(), index = state.steps[state.mode], step = steps[index];
  $('modeTabs').replaceChildren();
  groups.forEach(group => {
    const active = group.id === state.mode, button = document.createElement('button');
    button.className = `mode-tab${active ? ' active' : ''}`; button.id = `tab-${group.id}`;
    button.setAttribute('role','tab'); button.setAttribute('aria-controls','promptPanel'); button.setAttribute('aria-selected',String(active)); button.tabIndex = active ? 0 : -1;
    button.innerHTML = '<span class="mode-symbol" aria-hidden="true"></span><span><strong></strong><small></small></span><span class="mode-count"></span>';
    button.querySelector('.mode-symbol').textContent = group.id === 'night' ? '☾' : '✳';
    button.querySelector('strong').textContent = group.title; button.querySelector('small').textContent = group.description;
    button.querySelector('.mode-count').textContent = `${group.steps.length}단계`;
    button.addEventListener('click', () => { state.mode = group.id; render(); $(`tab-${group.id}`).focus(); });
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
      event.preventDefault(); const i = groups.findIndex(item => item.id === group.id);
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? groups.length - 1 : (i + (event.key === 'ArrowRight' ? 1 : -1) + groups.length) % groups.length;
      state.mode = groups[next].id; render(); $(`tab-${state.mode}`).focus();
    });
    $('modeTabs').appendChild(button);
  });
  $('promptPanel').setAttribute('aria-labelledby', `tab-${state.mode}`);
  $('stepCount').textContent = String(steps.length).padStart(2, '0');
  const navigation = $('stepList'); navigation.replaceChildren();
  steps.forEach((item, i) => {
    const button = document.createElement('button'); button.className = `step-button${i === index ? ' active' : ''}`;
    button.innerHTML = `<span class="step-number">${String(i + 1).padStart(2, '0')}</span><span class="step-name"></span><span class="step-arrow" aria-hidden="true">↗</span>`;
    button.querySelector('.step-name').textContent = item.title;
    if (i === index) button.setAttribute('aria-current', 'step');
    button.addEventListener('click', () => changeStep(i)); navigation.appendChild(button);
  });
  $('stepEyebrow').textContent = `STEP ${String(index + 1).padStart(2, '0')} / ${currentGroup().title}`;
  $('stepTitle').textContent = step.title; $('stepDescription').textContent = step.description;
  $('promptText').value = step.prompt; $('promptText').scrollTop = 0;
  $('checkpoint').textContent = step.check; $('pageNumber').textContent = `${index + 1} / ${steps.length}`;
  $('prevButton').disabled = index === 0; $('nextButton').disabled = index === steps.length - 1;
  clearTimeout(labelTimer); $('copyLabel').textContent = '프롬프트 복사'; $('copyButton').classList.remove('copied');
}
function changeStep(index) {
  if (index < 0 || index >= currentSteps().length) return;
  state.steps[state.mode] = index; render();
  const button = $('stepList').children[index];
  if (window.innerWidth <= 650) button.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'nearest' });
  button.focus({ preventScroll: true });
}
function notify(message) {
  clearTimeout(toastTimer); $('toast').textContent = message; $('toast').classList.add('show');
  toastTimer = setTimeout(() => $('toast').classList.remove('show'), 3000);
}
async function copy(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return true; }
  } catch (_) { /* 클립보드 권한이 없으면 브라우저의 기본 복사를 시도합니다. */ }
  const previousFocus = document.activeElement, helper = document.createElement('textarea');
  helper.value = text; helper.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;';
  document.body.appendChild(helper); helper.focus(); helper.select(); helper.setSelectionRange(0, text.length);
  let success = false;
  try { success = document.execCommand('copy'); } catch (_) { success = false; }
  helper.remove(); previousFocus?.focus({ preventScroll: true }); return success;
}
$('copyButton').addEventListener('click', async () => {
  const button = $('copyButton'); button.disabled = true;
  try {
    if (await copy($('promptText').value)) {
      $('copyLabel').textContent = '복사 완료!'; button.classList.add('copied');
      notify('복사했어요. AI 채팅에 붙여넣고 [학생 작성]을 채워주세요.');
      labelTimer = setTimeout(() => { $('copyLabel').textContent = '프롬프트 복사'; button.classList.remove('copied'); }, 2200);
    } else {
      $('promptText').focus(); $('promptText').select();
      notify('자동 복사가 제한됐어요. 선택된 글을 Ctrl+C 또는 길게 눌러 복사하세요.');
    }
  } finally { button.disabled = false; }
});
$('copyAllButton').addEventListener('click', async () => {
  const all = currentSteps().map((step, index) => `${index + 1}단계 · ${step.title}\n\n${step.prompt}`).join('\n\n────────────────────\n\n');
  if (await copy(all)) notify('전체 단계를 복사했어요. 한 단계씩 나눠 사용해주세요.');
  else { $('promptText').value = all; $('promptText').focus(); $('promptText').select(); notify('전체 글을 선택했어요. Ctrl+C 또는 길게 눌러 복사하세요.'); }
});
$('prevButton').addEventListener('click', () => changeStep(state.steps[state.mode] - 1));
$('nextButton').addEventListener('click', () => changeStep(state.steps[state.mode] + 1));
function openEditor(kind, adding) {
  editorContext = {kind, adding, groupId:state.mode, index:state.steps[state.mode]};
  const item = adding ? {} : kind === 'group' ? currentGroup() : currentSteps()[state.steps[state.mode]];
  $('editorTitle').textContent = `${kind === 'group' ? '양식' : '단계'} ${adding ? '추가' : '수정'}`;
  $('editTitle').value = item.title || ''; $('editDescription').value = item.description || '';
  $('editPrompt').value = item.prompt || ''; $('editCheck').value = item.check || '';
  $('stepFields').hidden = kind === 'group'; $('editPrompt').required = kind === 'step';
  $('deleteItem').hidden = adding; $('editorError').textContent = '';
  $('editor').showModal(); $('editTitle').focus();
}
$('addGroup').addEventListener('click', () => openEditor('group',true));
$('editGroup').addEventListener('click', () => openEditor('group',false));
$('addStep').addEventListener('click', () => openEditor('step',true));
$('editStep').addEventListener('click', () => openEditor('step',false));
for (const id of ['closeEditor','cancelEditor']) $(id).addEventListener('click', () => $('editor').close());
$('editorForm').addEventListener('submit', event => {
  event.preventDefault();
  const title = $('editTitle').value.trim(), description = $('editDescription').value.trim();
  if (!title) { $('editorError').textContent = '제목을 입력하세요.'; return; }
  const group = groups.find(item => item.id === editorContext.groupId);
  if (editorContext.kind === 'group') {
    if (editorContext.adding) {
      if (groups.length >= 30) { $('editorError').textContent = '양식은 최대 30개입니다.'; return; }
      const id = `group-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
      groups.push({id,title,description,steps:[{title:'첫 번째 단계',description:'현재 단계 수정 버튼으로 내용을 작성하세요.',prompt:'[학생 작성]',check:''}]}); state.mode = id;
    } else { group.title = title; group.description = description; }
  } else {
    const prompt = $('editPrompt').value.trim(), check = $('editCheck').value.trim();
    if (!prompt) { $('editorError').textContent = '프롬프트를 입력하세요.'; return; }
    const step = {title,description,prompt,check};
    if (editorContext.adding) {
      if (group.steps.length >= 100) { $('editorError').textContent = '단계는 최대 100개입니다.'; return; }
      group.steps.push(step); state.steps[state.mode] = group.steps.length - 1;
    } else group.steps[editorContext.index] = step;
  }
  persist(); render(); $('editor').close(); notify(storageAvailable ? '저장했어요. 학생들에게 공유하려면 공유용 script.js를 받아 교체하세요.' : '화면에 반영했어요. 저장이 제한되어 파일 백업이 필요합니다.');
});
$('deleteItem').addEventListener('click', () => {
  const group = currentGroup(), deletingGroup = editorContext.kind === 'group';
  if ((deletingGroup && groups.length === 1) || (!deletingGroup && group.steps.length === 1)) { $('editorError').textContent = '양식과 단계는 각각 최소 하나가 필요합니다.'; return; }
  if (!window.confirm(deletingGroup ? '이 양식과 안의 모든 단계를 삭제할까요? 필요한 내용은 먼저 백업하세요.' : '현재 단계를 삭제할까요?')) return;
  if (deletingGroup) { groups = groups.filter(item => item.id !== state.mode); state.mode = groups[0].id; }
  else { group.steps.splice(editorContext.index,1); state.steps[state.mode] = Math.max(0,editorContext.index-1); }
  persist(); render(); $('editor').close(); notify('삭제했어요.');
});
function download(filename, contents, type) {
  const blob = new Blob([contents],{type}), url = URL.createObjectURL(blob), link = document.createElement('a');
  link.href = url; link.download = filename; document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url),1000);
}
function sharedData() { return {version:1,revision:`shared-${Date.now()}`,groups}; }
$('exportData').addEventListener('click', () => { download('prompt-kit-backup.json',JSON.stringify(sharedData(),null,2),'application/json;charset=utf-8'); notify('백업 파일을 저장했어요. 다른 브라우저에서 불러올 수 있습니다.'); });
$('importData').addEventListener('click', () => $('importFile').click());
$('importFile').addEventListener('change', async event => {
  const file = event.target.files[0]; if (!file) return;
  try {
    if (file.size > 5*1024*1024) throw new Error('5MB 이하의 백업 파일을 선택하세요.');
    const incoming = validateData(JSON.parse(await file.text()));
    if (!window.confirm('현재 양식을 백업 파일의 내용으로 교체할까요? 기존 내용은 먼저 백업해두세요.')) return;
    groups = structuredClone(incoming.groups); state.mode = groups[0].id; state.steps = Object.create(null);
    persist(); render(); notify('백업을 불러왔어요.');
  } catch (error) { notify(error instanceof SyntaxError ? 'JSON 형식의 백업 파일이 아닙니다.' : error.message); }
  finally { event.target.value = ''; }
});
$('exportScript').addEventListener('click', async () => {
  const button = $('exportScript'); button.disabled = true;
  try {
    const response = await fetch(sourceURL,{cache:'no-store'});
    if (!response.ok) throw new Error('스크립트 파일을 읽을 수 없습니다.');
    const source = await response.text(), marker = /^\/\/ BEGIN_SHARED_DATA\r?\n[\s\S]*?^\/\/ END_SHARED_DATA/m;
    if (!marker.test(source)) throw new Error('공유 데이터 영역을 찾지 못했습니다.');
    const replacement = `// BEGIN_SHARED_DATA\nconst SHARED_DATA = ${JSON.stringify(sharedData())};\n// END_SHARED_DATA`;
    download('script.js',source.replace(marker,() => replacement),'text/javascript;charset=utf-8');
    notify('받은 script.js로 GitHub 파일을 교체하면 모두에게 반영됩니다.');
  } catch (_) { notify('공유 파일을 만들 수 없어요. 배포된 웹사이트에서 다시 시도하거나 백업 저장을 사용하세요.'); }
  finally { button.disabled = false; }
});
render();
if (!storageAvailable) $('storageNotice').textContent = '브라우저의 저장 공간에 접근하지 못했거나 저장 기록이 손상됐습니다. 편집 후 파일로 백업하세요.';
