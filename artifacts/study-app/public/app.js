/* ============================================
   تطبيق الدراسة - StudyApp
   منطق التطبيق الكامل (Vanilla JavaScript)
   ============================================ */

// ============================================
// 1. الترجمات (i18n)
// ============================================
const translations = {
  ar: {
    welcome: 'مرحباً بك',
    auth_subtitle: 'سجل دخولك أو أنشئ حساباً جديداً',
    login: 'تسجيل الدخول',
    register: 'إنشاء حساب',
    create_account: 'إنشاء حساب',
    skip_auth: 'المتابعة كزائر',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    home: 'الرئيسية',
    files: 'الملفات',
    favorites: 'المفضلة',
    settings: 'الإعدادات',
    hello: 'مرحباً',
    welcome_msg: 'جاهز لجلسة دراسة منتجة؟',
    total_files: 'إجمالي الملفات',
    completed: 'مكتملة',
    study_hours: 'ساعات الدراسة',
    pomodoro: 'مؤقت بومودورو',
    focus: 'تركيز',
    short_break: 'استراحة 5د',
    long_break: 'استراحة 15د',
    start: 'بدء',
    pause: 'إيقاف',
    reset: 'إعادة',
    today_plan: 'مخطط اليوم',
    no_tasks: 'لا توجد مهام لليوم',
    add_task: 'إضافة مهمة',
    task_placeholder: 'ماذا ستدرس اليوم؟',
    cancel: 'إلغاء',
    save: 'حفظ',
    search_files: 'ابحث في الملفات والملاحظات...',
    all: 'الكل',
    images: 'صور',
    videos: 'فيديو',
    drop_files: 'اسحب الملفات هنا أو اضغط للرفع',
    drop_hint: 'PDF · صور · فيديو',
    no_files: 'لا توجد ملفات بعد',
    no_favorites: 'لا توجد ملفات مفضلة',
    account: 'الحساب',
    logout: 'تسجيل الخروج',
    preferences: 'التفضيلات',
    dark_mode: 'الوضع الليلي',
    dark_mode_desc: 'تبديل بين الفاتح والداكن',
    language: 'اللغة',
    language_desc: 'العربية / English',
    notifications: 'الإشعارات',
    notifications_desc: 'تذكيرات بومودورو',
    study_stats: 'إحصائيات الدراسة',
    total_sessions: 'إجمالي الجلسات',
    total_minutes: 'إجمالي الدقائق',
    storage_used: 'المساحة المستخدمة',
    data: 'البيانات',
    clear_data: 'مسح جميع البيانات',
    notes: 'الملاحظات',
    notes_placeholder: 'اكتب ملاحظاتك هنا...',
    speed: 'السرعة:',
    install_title: 'ثبّت التطبيق',
    install_desc: 'للحصول على تجربة أفضل',
    install: 'تثبيت',
    continue_reading: 'متابعة القراءة',
    file_added: 'تمت إضافة الملف',
    file_removed: 'تم حذف الملف',
    file_too_large: 'حجم الملف كبير جداً',
    invalid_file: 'نوع ملف غير مدعوم',
    notes_saved: 'تم حفظ الملاحظة',
    confirm_clear: 'هل أنت متأكد من مسح جميع البيانات؟',
    confirm_delete: 'حذف الملف نهائياً؟',
    pomodoro_done: 'انتهى الوقت!',
    break_done: 'انتهت الاستراحة، عد للتركيز!',
    delete: 'حذف',
    invalid_credentials: 'بيانات الدخول غير صحيحة',
    user_exists: 'المستخدم موجود بالفعل',
    welcome_back: 'مرحباً بعودتك',
    signup_success: 'تم إنشاء حسابك',
  },
  en: {
    welcome: 'Welcome',
    auth_subtitle: 'Sign in or create a new account',
    login: 'Sign In',
    register: 'Sign Up',
    create_account: 'Create Account',
    skip_auth: 'Continue as Guest',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    home: 'Home',
    files: 'Files',
    favorites: 'Favorites',
    settings: 'Settings',
    hello: 'Hello',
    welcome_msg: 'Ready for a productive study session?',
    total_files: 'Total Files',
    completed: 'Completed',
    study_hours: 'Study Hours',
    pomodoro: 'Pomodoro Timer',
    focus: 'Focus',
    short_break: 'Short Break',
    long_break: 'Long Break',
    start: 'Start',
    pause: 'Pause',
    reset: 'Reset',
    today_plan: 'Today\'s Plan',
    no_tasks: 'No tasks for today',
    add_task: 'Add Task',
    task_placeholder: 'What will you study today?',
    cancel: 'Cancel',
    save: 'Save',
    search_files: 'Search files and notes...',
    all: 'All',
    images: 'Images',
    videos: 'Videos',
    drop_files: 'Drag files here or tap to upload',
    drop_hint: 'PDF · Images · Video',
    no_files: 'No files yet',
    no_favorites: 'No favorite files',
    account: 'Account',
    logout: 'Sign Out',
    preferences: 'Preferences',
    dark_mode: 'Dark Mode',
    dark_mode_desc: 'Toggle between light and dark',
    language: 'Language',
    language_desc: 'English / العربية',
    notifications: 'Notifications',
    notifications_desc: 'Pomodoro reminders',
    study_stats: 'Study Stats',
    total_sessions: 'Total Sessions',
    total_minutes: 'Total Minutes',
    storage_used: 'Storage Used',
    data: 'Data',
    clear_data: 'Clear All Data',
    notes: 'Notes',
    notes_placeholder: 'Write your notes here...',
    speed: 'Speed:',
    install_title: 'Install App',
    install_desc: 'For a better experience',
    install: 'Install',
    continue_reading: 'Continue Reading',
    file_added: 'File added',
    file_removed: 'File deleted',
    file_too_large: 'File is too large',
    invalid_file: 'Unsupported file type',
    notes_saved: 'Notes saved',
    confirm_clear: 'Are you sure you want to clear all data?',
    confirm_delete: 'Delete file permanently?',
    pomodoro_done: 'Time\'s up!',
    break_done: 'Break is over, back to focus!',
    delete: 'Delete',
    invalid_credentials: 'Invalid credentials',
    user_exists: 'User already exists',
    welcome_back: 'Welcome back',
    signup_success: 'Account created',
  },
};

// ============================================
// 2. الحالة العامة (State)
// ============================================
const state = {
  user: null,
  language: 'ar',
  theme: 'light',
  files: [],          // metadata array
  filters: { type: 'all', search: '' },
  currentPage: 'home',
  currentFile: null,
  pomodoro: {
    duration: 25 * 60,
    remaining: 25 * 60,
    interval: null,
    running: false,
    mode: 'focus',
  },
  pdfZoom: 1,
  videoSpeed: 1,
  notifications: false,
  installPromptEvent: null,
};

const STORAGE_KEYS = {
  USER: 'studyapp_user',
  USERS: 'studyapp_users',
  LANG: 'studyapp_lang',
  THEME: 'studyapp_theme',
  TASKS: 'studyapp_tasks',
  STATS: 'studyapp_stats',
  LAST_FILE: 'studyapp_last_file',
  NOTIF: 'studyapp_notif',
};

// ============================================
// 3. IndexedDB لتخزين الملفات الكبيرة
// ============================================
const DB_NAME = 'studyapp_db';
const DB_VERSION = 1;
const STORE_FILES = 'files';
const STORE_BLOBS = 'blobs';

let db = null;

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onerror = () => reject(req.error);
    req.onsuccess = () => { db = req.result; resolve(db); };
    req.onupgradeneeded = (e) => {
      const _db = e.target.result;
      if (!_db.objectStoreNames.contains(STORE_FILES)) {
        _db.createObjectStore(STORE_FILES, { keyPath: 'id' });
      }
      if (!_db.objectStoreNames.contains(STORE_BLOBS)) {
        _db.createObjectStore(STORE_BLOBS, { keyPath: 'id' });
      }
    };
  });
}

function dbTx(storeName, mode = 'readonly') {
  return db.transaction(storeName, mode).objectStore(storeName);
}

function dbPut(storeName, data) {
  return new Promise((resolve, reject) => {
    const req = dbTx(storeName, 'readwrite').put(data);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

function dbGet(storeName, id) {
  return new Promise((resolve, reject) => {
    const req = dbTx(storeName).get(id);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function dbGetAll(storeName) {
  return new Promise((resolve, reject) => {
    const req = dbTx(storeName).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

function dbDelete(storeName, id) {
  return new Promise((resolve, reject) => {
    const req = dbTx(storeName, 'readwrite').delete(id);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

function dbClear(storeName) {
  return new Promise((resolve, reject) => {
    const req = dbTx(storeName, 'readwrite').clear();
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

// ============================================
// 4. الترجمة وتطبيق اللغة
// ============================================
function t(key) {
  return translations[state.language][key] || key;
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.documentElement.dir = state.language === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
  document.getElementById('lang-label').textContent = state.language === 'ar' ? 'EN' : 'AR';
  document.getElementById('lang-select').value = state.language;
}

// ============================================
// 5. الثيم (الوضع الداكن)
// ============================================
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  document.querySelector('meta[name="theme-color"]')
    .setAttribute('content', state.theme === 'dark' ? '#0e1018' : '#6366f1');
  const toggle = document.getElementById('dark-toggle');
  if (toggle) toggle.checked = state.theme === 'dark';
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
  applyTheme();
}

// ============================================
// 6. المصادقة (محلياً)
// ============================================
function getUsers() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]'); }
  catch { return []; }
}

function setUsers(users) {
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
}

async function hashPassword(pw) {
  const data = new TextEncoder().encode(pw + 'studyapp_salt');
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0')).join('');
}

async function login(email, password) {
  const users = getUsers();
  const hash = await hashPassword(password);
  const user = users.find(u => u.email === email.toLowerCase() && u.password === hash);
  if (!user) throw new Error(t('invalid_credentials'));
  state.user = { name: user.name, email: user.email };
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(state.user));
  return user;
}

async function register(name, email, password) {
  const users = getUsers();
  if (users.find(u => u.email === email.toLowerCase())) throw new Error(t('user_exists'));
  const hash = await hashPassword(password);
  users.push({ name, email: email.toLowerCase(), password: hash });
  setUsers(users);
  state.user = { name, email: email.toLowerCase() };
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(state.user));
}

function logout() {
  state.user = null;
  localStorage.removeItem(STORAGE_KEYS.USER);
  showAuth();
}

function showAuth() {
  document.getElementById('app').classList.add('hidden');
  document.getElementById('auth-screen').classList.remove('hidden');
}

function showApp() {
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  updateUserGreeting();
  refreshAll();
}

function updateUserGreeting() {
  const name = state.user?.name || (state.language === 'ar' ? 'صديقي' : 'friend');
  document.getElementById('user-greeting').textContent = name;
  document.getElementById('settings-user').textContent = state.user?.email || (state.language === 'ar' ? 'زائر' : 'Guest');
}

// ============================================
// 7. التنقل بين الصفحات
// ============================================
function navigate(page) {
  state.currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.page === page));
  document.getElementById('page-title').textContent = t(page);
  // تحديث المحتوى عند التنقل
  if (page === 'files') renderFiles();
  if (page === 'favorites') renderFavorites();
  if (page === 'home') refreshHome();
  if (page === 'settings') refreshSettings();
  // التمرير لأعلى
  document.querySelector('.app-main')?.scrollTo(0, 0);
}

// ============================================
// 8. إدارة الملفات
// ============================================
const MAX_FILE_SIZE = 200 * 1024 * 1024; // 200MB

function getFileType(file) {
  if (file.type === 'application/pdf') return 'pdf';
  if (file.type.startsWith('image/')) return 'image';
  if (file.type.startsWith('video/')) return 'video';
  return null;
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  if (bytes < 1024 * 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + ' MB';
  return (bytes / 1024 / 1024 / 1024).toFixed(2) + ' GB';
}

function formatDate(timestamp) {
  const d = new Date(timestamp);
  const lang = state.language === 'ar' ? 'ar-SA' : 'en-US';
  return d.toLocaleDateString(lang, { year: 'numeric', month: 'short', day: 'numeric' });
}

async function uploadFile(file) {
  const type = getFileType(file);
  if (!type) {
    showToast(t('invalid_file'));
    return;
  }
  if (file.size > MAX_FILE_SIZE) {
    showToast(t('file_too_large'));
    return;
  }
  const id = 'f_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
  const meta = {
    id,
    name: file.name,
    type,
    mime: file.type,
    size: file.size,
    addedAt: Date.now(),
    favorite: false,
    completed: false,
    notes: '',
    progress: 0,
    lastPosition: 0,
  };
  // توليد thumbnail للصور
  if (type === 'image') {
    try { meta.thumbnail = await generateThumbnail(file); } catch {}
  }
  await dbPut(STORE_BLOBS, { id, blob: file });
  await dbPut(STORE_FILES, meta);
  state.files.unshift(meta);
  renderFiles();
  refreshHome();
  showToast(t('file_added'));
}

function generateThumbnail(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const size = 96;
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext('2d');
        const ratio = Math.max(size / img.width, size / img.height);
        const w = img.width * ratio;
        const h = img.height * ratio;
        ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.7));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function deleteFile(id) {
  if (!confirm(t('confirm_delete'))) return;
  await dbDelete(STORE_FILES, id);
  await dbDelete(STORE_BLOBS, id);
  state.files = state.files.filter(f => f.id !== id);
  renderFiles();
  renderFavorites();
  refreshHome();
  showToast(t('file_removed'));
}

async function toggleFavorite(id) {
  const file = state.files.find(f => f.id === id);
  if (!file) return;
  file.favorite = !file.favorite;
  await dbPut(STORE_FILES, file);
  renderFiles();
  renderFavorites();
  refreshHome();
}

async function toggleComplete(id) {
  const file = state.files.find(f => f.id === id);
  if (!file) return;
  file.completed = !file.completed;
  await dbPut(STORE_FILES, file);
  renderFiles();
  renderFavorites();
  refreshHome();
  if (state.currentFile?.id === id) {
    document.getElementById('viewer-complete').classList.toggle('active', file.completed);
  }
}

async function loadFiles() {
  state.files = await dbGetAll(STORE_FILES);
  state.files.sort((a, b) => b.addedAt - a.addedAt);
}

// ============================================
// 9. عرض قائمة الملفات
// ============================================
function fileItemHTML(file) {
  let thumbContent = '';
  if (file.type === 'image' && file.thumbnail) {
    thumbContent = `<img src="${file.thumbnail}" alt="" />`;
  } else {
    thumbContent = file.type.toUpperCase();
  }

  return `
    <div class="file-item" data-id="${file.id}" tabindex="0" role="button">
      <div class="file-thumb ${file.type}">${thumbContent}</div>
      <div class="file-info">
        <div class="file-name">${escapeHtml(file.name)}</div>
        <div class="file-meta">
          <span>${file.type.toUpperCase()}</span>
          <span class="dot"></span>
          <span>${formatSize(file.size)}</span>
          <span class="dot"></span>
          <span>${formatDate(file.addedAt)}</span>
        </div>
      </div>
      <div class="file-badges">
        ${file.favorite ? `<span class="file-badge fav">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </span>` : ''}
        ${file.completed ? `<span class="file-badge complete">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </span>` : ''}
      </div>
    </div>
  `;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[c]));
}

function renderFiles() {
  const list = document.getElementById('files-list');
  const empty = document.getElementById('files-empty');
  let filtered = state.files;
  if (state.filters.type !== 'all') {
    filtered = filtered.filter(f => f.type === state.filters.type);
  }
  if (state.filters.search) {
    const q = state.filters.search.toLowerCase();
    filtered = filtered.filter(f =>
      f.name.toLowerCase().includes(q) ||
      (f.notes && f.notes.toLowerCase().includes(q))
    );
  }
  if (filtered.length === 0) {
    list.innerHTML = '';
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    list.innerHTML = filtered.map(fileItemHTML).join('');
    list.querySelectorAll('.file-item').forEach(el => {
      el.addEventListener('click', () => openViewer(el.dataset.id));
    });
  }
}

function renderFavorites() {
  const list = document.getElementById('favorites-list');
  const empty = document.getElementById('favorites-empty');
  const favs = state.files.filter(f => f.favorite);
  if (favs.length === 0) {
    list.innerHTML = '';
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    list.innerHTML = favs.map(fileItemHTML).join('');
    list.querySelectorAll('.file-item').forEach(el => {
      el.addEventListener('click', () => openViewer(el.dataset.id));
    });
  }
}

// ============================================
// 10. عارض الملفات
// ============================================
let currentBlobUrl = null;

async function openViewer(id) {
  const file = state.files.find(f => f.id === id);
  if (!file) return;
  state.currentFile = file;

  // حفظ آخر ملف مفتوح
  localStorage.setItem(STORAGE_KEYS.LAST_FILE, id);
  refreshHome();

  const modal = document.getElementById('viewer-modal');
  const content = document.getElementById('viewer-content');
  const title = document.getElementById('viewer-title');
  const pdfToolbar = document.getElementById('pdf-toolbar');
  const videoToolbar = document.getElementById('video-toolbar');
  const ttsBtn = document.getElementById('viewer-tts');

  title.textContent = file.name;
  content.innerHTML = '';

  // الحصول على الـ Blob
  const blobData = await dbGet(STORE_BLOBS, id);
  if (!blobData) {
    showToast(t('invalid_file'));
    return;
  }
  if (currentBlobUrl) URL.revokeObjectURL(currentBlobUrl);
  currentBlobUrl = URL.createObjectURL(blobData.blob);

  // عرض حسب النوع
  pdfToolbar.classList.add('hidden');
  videoToolbar.classList.add('hidden');
  ttsBtn.classList.add('hidden');

  if (file.type === 'pdf') {
    pdfToolbar.classList.remove('hidden');
    state.pdfZoom = 1;
    updateZoomDisplay();
    content.innerHTML = `
      <div class="pdf-wrapper" id="pdf-wrapper">
        <div class="pdf-frame-wrapper" id="pdf-frame-wrapper" style="width:100%;height:100%;">
          <iframe src="${currentBlobUrl}#toolbar=0" style="width:100%;height:100%;border:none;"></iframe>
        </div>
      </div>
    `;
  } else if (file.type === 'image') {
    pdfToolbar.classList.remove('hidden');
    state.pdfZoom = 1;
    updateZoomDisplay();
    content.innerHTML = `
      <div class="image-wrapper">
        <img id="viewer-image" src="${currentBlobUrl}" alt="${escapeHtml(file.name)}" />
      </div>
    `;
  } else if (file.type === 'video') {
    videoToolbar.classList.remove('hidden');
    const startTime = file.lastPosition || 0;
    content.innerHTML = `<video id="viewer-video" controls playsinline src="${currentBlobUrl}"></video>`;
    const video = document.getElementById('viewer-video');
    video.addEventListener('loadedmetadata', () => {
      if (startTime > 0 && startTime < video.duration - 5) {
        video.currentTime = startTime;
      }
      video.playbackRate = state.videoSpeed;
    });
    video.addEventListener('timeupdate', () => {
      file.lastPosition = video.currentTime;
      // حفظ كل 5 ثوانٍ
      if (Math.floor(video.currentTime) % 5 === 0) {
        dbPut(STORE_FILES, file).catch(() => {});
      }
    });
    // تحديث الأزرار
    document.querySelectorAll('.speed-btn').forEach(b => {
      b.classList.toggle('active', parseFloat(b.dataset.speed) === state.videoSpeed);
    });
  }

  // تفعيل TTS فقط للملفات النصية (نعرضه دائماً للملاحظات)
  ttsBtn.classList.remove('hidden');

  // تحديث الأيقونات
  document.getElementById('viewer-fav').classList.toggle('active', file.favorite);
  document.getElementById('viewer-complete').classList.toggle('active', file.completed);
  document.getElementById('notes-textarea').value = file.notes || '';

  modal.classList.remove('hidden');
}

function closeViewer() {
  // إيقاف TTS
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  // حفظ موضع الفيديو
  const video = document.getElementById('viewer-video');
  if (video && state.currentFile) {
    state.currentFile.lastPosition = video.currentTime;
    dbPut(STORE_FILES, state.currentFile).catch(() => {});
  }
  document.getElementById('viewer-modal').classList.add('hidden');
  document.getElementById('notes-panel').classList.add('hidden');
  if (currentBlobUrl) {
    URL.revokeObjectURL(currentBlobUrl);
    currentBlobUrl = null;
  }
  state.currentFile = null;
}

function updateZoomDisplay() {
  document.getElementById('zoom-level').textContent = Math.round(state.pdfZoom * 100) + '%';
  const wrapper = document.getElementById('pdf-frame-wrapper');
  const img = document.getElementById('viewer-image');
  if (wrapper) wrapper.style.transform = `scale(${state.pdfZoom})`;
  if (img) img.style.transform = `scale(${state.pdfZoom})`;
}

function changeVideoSpeed(speed) {
  state.videoSpeed = speed;
  const video = document.getElementById('viewer-video');
  if (video) video.playbackRate = speed;
  document.querySelectorAll('.speed-btn').forEach(b => {
    b.classList.toggle('active', parseFloat(b.dataset.speed) === speed);
  });
}

// ============================================
// 11. الملاحظات
// ============================================
function toggleNotes() {
  const panel = document.getElementById('notes-panel');
  panel.classList.toggle('hidden');
  if (!panel.classList.contains('hidden')) {
    const textarea = document.getElementById('notes-textarea');
    textarea.focus();
    updateNotesMeta();
  }
}

function updateNotesMeta() {
  const text = document.getElementById('notes-textarea').value;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const chars = text.length;
  const meta = document.getElementById('notes-meta');
  meta.textContent = state.language === 'ar'
    ? `${words} كلمة · ${chars} حرف`
    : `${words} words · ${chars} chars`;
}

let notesTimeout;
function onNotesInput() {
  clearTimeout(notesTimeout);
  updateNotesMeta();
  notesTimeout = setTimeout(async () => {
    if (!state.currentFile) return;
    state.currentFile.notes = document.getElementById('notes-textarea').value;
    await dbPut(STORE_FILES, state.currentFile);
  }, 500);
}

// ============================================
// 12. النص إلى صوت (Text-to-Speech)
// ============================================
function toggleTTS() {
  if (!('speechSynthesis' in window)) {
    showToast('TTS not supported');
    return;
  }
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    return;
  }
  const text = document.getElementById('notes-textarea').value || state.currentFile?.name;
  if (!text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = state.language === 'ar' ? 'ar-SA' : 'en-US';
  utterance.rate = 0.95;
  speechSynthesis.speak(utterance);
}

// ============================================
// 13. مؤقت بومودورو
// ============================================
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updatePomodoroDisplay() {
  document.getElementById('pomodoro-display').textContent = formatTime(state.pomodoro.remaining);
  document.getElementById('pomodoro-mode').textContent = t(state.pomodoro.mode);
}

function startPomodoro() {
  if (state.pomodoro.running) return;
  state.pomodoro.running = true;
  document.getElementById('pomodoro-start').classList.add('hidden');
  document.getElementById('pomodoro-pause').classList.remove('hidden');
  state.pomodoro.interval = setInterval(() => {
    state.pomodoro.remaining--;
    updatePomodoroDisplay();
    if (state.pomodoro.remaining <= 0) {
      finishPomodoro();
    }
  }, 1000);
}

function pausePomodoro() {
  state.pomodoro.running = false;
  clearInterval(state.pomodoro.interval);
  document.getElementById('pomodoro-start').classList.remove('hidden');
  document.getElementById('pomodoro-pause').classList.add('hidden');
}

function resetPomodoro() {
  pausePomodoro();
  state.pomodoro.remaining = state.pomodoro.duration;
  updatePomodoroDisplay();
}

function finishPomodoro() {
  pausePomodoro();
  if (state.pomodoro.mode === 'focus') {
    saveStudySession(state.pomodoro.duration / 60);
    sendNotification(t('pomodoro_done'));
  } else {
    sendNotification(t('break_done'));
  }
  showToast(state.pomodoro.mode === 'focus' ? t('pomodoro_done') : t('break_done'));
  // تشغيل صوت تنبيه
  playBeep();
  resetPomodoro();
  refreshHome();
}

function setPomodoroMode(duration, mode) {
  pausePomodoro();
  state.pomodoro.duration = duration * 60;
  state.pomodoro.remaining = duration * 60;
  state.pomodoro.mode = mode;
  updatePomodoroDisplay();
  document.querySelectorAll('.mode-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.mode === mode);
  });
}

function playBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = 660;
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
    osc.start();
    osc.stop(ctx.currentTime + 0.6);
  } catch {}
}

// ============================================
// 14. إحصائيات الدراسة
// ============================================
function getStats() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.STATS) || '{}'); }
  catch { return {}; }
}

function saveStudySession(minutes) {
  const stats = getStats();
  stats.sessions = (stats.sessions || 0) + 1;
  stats.minutes = (stats.minutes || 0) + minutes;
  localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
}

// ============================================
// 15. مهام اليوم
// ============================================
function getTasks() {
  const today = new Date().toDateString();
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.TASKS) || '{}');
    return all[today] || [];
  } catch { return []; }
}

function saveTasks(tasks) {
  const today = new Date().toDateString();
  let all = {};
  try { all = JSON.parse(localStorage.getItem(STORAGE_KEYS.TASKS) || '{}'); } catch {}
  all[today] = tasks;
  // تنظيف المهام القديمة
  Object.keys(all).forEach(d => {
    if (Date.now() - new Date(d).getTime() > 30 * 24 * 60 * 60 * 1000) delete all[d];
  });
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(all));
}

function renderTasks() {
  const tasks = getTasks();
  const list = document.getElementById('tasks-list');
  const empty = document.getElementById('tasks-empty');
  if (tasks.length === 0) {
    list.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');
  list.innerHTML = tasks.map((t, i) => `
    <div class="task-item">
      <div class="task-checkbox ${t.done ? 'checked' : ''}" data-i="${i}" role="checkbox" aria-checked="${t.done}"></div>
      <div class="task-text ${t.done ? 'done' : ''}">${escapeHtml(t.text)}</div>
      <button class="task-delete" data-del="${i}" aria-label="Delete">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  `).join('');
  list.querySelectorAll('.task-checkbox').forEach(el => {
    el.addEventListener('click', () => {
      const i = parseInt(el.dataset.i);
      const tasks = getTasks();
      tasks[i].done = !tasks[i].done;
      saveTasks(tasks);
      renderTasks();
    });
  });
  list.querySelectorAll('.task-delete').forEach(el => {
    el.addEventListener('click', () => {
      const i = parseInt(el.dataset.del);
      const tasks = getTasks();
      tasks.splice(i, 1);
      saveTasks(tasks);
      renderTasks();
    });
  });
}

function addTask(text) {
  if (!text.trim()) return;
  const tasks = getTasks();
  tasks.push({ text: text.trim(), done: false });
  saveTasks(tasks);
  renderTasks();
}

// ============================================
// 16. تحديث الواجهة الرئيسية
// ============================================
async function refreshHome() {
  document.getElementById('stat-files').textContent = state.files.length;
  document.getElementById('stat-completed').textContent = state.files.filter(f => f.completed).length;
  document.getElementById('stat-favorites').textContent = state.files.filter(f => f.favorite).length;
  const stats = getStats();
  document.getElementById('stat-hours').textContent = ((stats.minutes || 0) / 60).toFixed(1);

  // آخر ملف مفتوح
  const lastId = localStorage.getItem(STORAGE_KEYS.LAST_FILE);
  const section = document.getElementById('last-opened-section');
  const card = document.getElementById('last-opened-card');
  if (lastId && state.files.find(f => f.id === lastId)) {
    const file = state.files.find(f => f.id === lastId);
    section.classList.remove('hidden');
    card.innerHTML = `
      <div class="file-thumb ${file.type}">${file.type.toUpperCase()}</div>
      <div class="file-info">
        <div class="file-name">${escapeHtml(file.name)}</div>
        <div class="file-meta"><span>${formatSize(file.size)}</span></div>
      </div>
    `;
    card.onclick = () => openViewer(lastId);
  } else {
    section.classList.add('hidden');
  }

  renderTasks();
  updatePomodoroDisplay();
}

async function refreshSettings() {
  const stats = getStats();
  document.getElementById('stat-sessions').textContent = stats.sessions || 0;
  document.getElementById('stat-minutes').textContent = Math.floor(stats.minutes || 0);
  // حساب المساحة
  let total = 0;
  for (const f of state.files) total += f.size;
  document.getElementById('stat-storage').textContent = formatSize(total);
}

function refreshAll() {
  applyLanguage();
  applyTheme();
  refreshHome();
  renderFiles();
  renderFavorites();
  refreshSettings();
}

// ============================================
// 17. Toast والإشعارات
// ============================================
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  toast.style.animation = 'none';
  void toast.offsetWidth;
  toast.style.animation = '';
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.add('hidden'), 2900);
}

async function requestNotifications() {
  if (!('Notification' in window)) return false;
  if (Notification.permission === 'granted') return true;
  if (Notification.permission === 'denied') return false;
  const result = await Notification.requestPermission();
  return result === 'granted';
}

function sendNotification(message) {
  if (!state.notifications) return;
  if (Notification.permission !== 'granted') return;
  try {
    new Notification('StudyApp', { body: message, icon: 'icon-192.png' });
  } catch {}
}

// ============================================
// 18. PWA & Service Worker
// ============================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch(err => {
      console.warn('SW registration failed:', err);
    });
  });
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  state.installPromptEvent = e;
  const prompt = document.getElementById('install-prompt');
  if (!localStorage.getItem('install_dismissed')) {
    setTimeout(() => prompt.classList.remove('hidden'), 3000);
  }
});

// ============================================
// 19. إعداد المستمعين (Event Listeners)
// ============================================
function setupEventListeners() {
  // تبديل بين تسجيل الدخول والتسجيل
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === target));
      document.getElementById('login-form').classList.toggle('hidden', target !== 'login');
      document.getElementById('register-form').classList.toggle('hidden', target !== 'register');
    });
  });

  // تسجيل الدخول
  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    try {
      await login(fd.get('email'), fd.get('password'));
      showToast(t('welcome_back'));
      showApp();
    } catch (err) {
      showToast(err.message);
    }
  });

  // إنشاء حساب
  document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    try {
      await register(fd.get('name'), fd.get('email'), fd.get('password'));
      showToast(t('signup_success'));
      showApp();
    } catch (err) {
      showToast(err.message);
    }
  });

  // المتابعة كزائر
  document.getElementById('skip-auth').addEventListener('click', () => {
    showApp();
  });

  // تسجيل الخروج
  document.getElementById('logout-btn').addEventListener('click', logout);

  // الثيم
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('dark-toggle').addEventListener('change', (e) => {
    state.theme = e.target.checked ? 'dark' : 'light';
    localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
    applyTheme();
  });

  // اللغة
  document.getElementById('lang-toggle').addEventListener('click', () => {
    state.language = state.language === 'ar' ? 'en' : 'ar';
    localStorage.setItem(STORAGE_KEYS.LANG, state.language);
    refreshAll();
  });
  document.getElementById('lang-select').addEventListener('change', (e) => {
    state.language = e.target.value;
    localStorage.setItem(STORAGE_KEYS.LANG, state.language);
    refreshAll();
  });

  // التنقل
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => navigate(item.dataset.page));
  });

  // رفع الملفات
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');
  dropZone.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', async (e) => {
    for (const file of e.target.files) await uploadFile(file);
    fileInput.value = '';
  });
  ['dragenter', 'dragover'].forEach(ev => {
    dropZone.addEventListener(ev, (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });
  });
  ['dragleave', 'drop'].forEach(ev => {
    dropZone.addEventListener(ev, (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
    });
  });
  dropZone.addEventListener('drop', async (e) => {
    for (const file of e.dataTransfer.files) await uploadFile(file);
  });

  // البحث والفلترة
  document.getElementById('search-input').addEventListener('input', (e) => {
    state.filters.search = e.target.value;
    renderFiles();
  });
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      state.filters.type = tab.dataset.filter;
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.toggle('active', t === tab));
      renderFiles();
    });
  });

  // العارض
  document.getElementById('viewer-close').addEventListener('click', closeViewer);
  document.getElementById('viewer-fav').addEventListener('click', () => {
    if (state.currentFile) toggleFavorite(state.currentFile.id);
  });
  document.getElementById('viewer-complete').addEventListener('click', () => {
    if (state.currentFile) toggleComplete(state.currentFile.id);
  });
  document.getElementById('viewer-notes').addEventListener('click', toggleNotes);
  document.getElementById('viewer-tts').addEventListener('click', toggleTTS);
  document.getElementById('notes-close').addEventListener('click', toggleNotes);
  document.getElementById('notes-textarea').addEventListener('input', onNotesInput);

  // الزووم
  document.getElementById('zoom-in').addEventListener('click', () => {
    state.pdfZoom = Math.min(state.pdfZoom + 0.25, 3);
    updateZoomDisplay();
  });
  document.getElementById('zoom-out').addEventListener('click', () => {
    state.pdfZoom = Math.max(state.pdfZoom - 0.25, 0.5);
    updateZoomDisplay();
  });

  // سرعة الفيديو
  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.addEventListener('click', () => changeVideoSpeed(parseFloat(btn.dataset.speed)));
  });

  // مؤقت بومودورو
  document.getElementById('pomodoro-start').addEventListener('click', startPomodoro);
  document.getElementById('pomodoro-pause').addEventListener('click', pausePomodoro);
  document.getElementById('pomodoro-reset').addEventListener('click', resetPomodoro);
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setPomodoroMode(parseInt(btn.dataset.duration), btn.dataset.mode);
    });
  });

  // المهام
  document.getElementById('add-task-btn').addEventListener('click', () => {
    document.getElementById('task-modal').classList.remove('hidden');
    setTimeout(() => document.getElementById('task-input').focus(), 50);
  });
  document.getElementById('task-cancel').addEventListener('click', () => {
    document.getElementById('task-modal').classList.add('hidden');
    document.getElementById('task-input').value = '';
  });
  document.getElementById('task-save').addEventListener('click', () => {
    const input = document.getElementById('task-input');
    addTask(input.value);
    input.value = '';
    document.getElementById('task-modal').classList.add('hidden');
  });
  document.getElementById('task-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('task-save').click();
    if (e.key === 'Escape') document.getElementById('task-cancel').click();
  });

  // الإشعارات
  document.getElementById('notif-toggle').addEventListener('change', async (e) => {
    if (e.target.checked) {
      const granted = await requestNotifications();
      state.notifications = granted;
      e.target.checked = granted;
      localStorage.setItem(STORAGE_KEYS.NOTIF, granted ? '1' : '0');
    } else {
      state.notifications = false;
      localStorage.setItem(STORAGE_KEYS.NOTIF, '0');
    }
  });

  // مسح البيانات
  document.getElementById('clear-data-btn').addEventListener('click', async () => {
    if (!confirm(t('confirm_clear'))) return;
    await dbClear(STORE_FILES);
    await dbClear(STORE_BLOBS);
    Object.values(STORAGE_KEYS).forEach(k => {
      if (k !== STORAGE_KEYS.LANG && k !== STORAGE_KEYS.THEME) {
        localStorage.removeItem(k);
      }
    });
    state.files = [];
    state.user = null;
    refreshAll();
    showToast(state.language === 'ar' ? 'تم مسح البيانات' : 'Data cleared');
    setTimeout(() => location.reload(), 800);
  });

  // تثبيت التطبيق
  document.getElementById('install-btn').addEventListener('click', async () => {
    if (!state.installPromptEvent) return;
    state.installPromptEvent.prompt();
    const { outcome } = await state.installPromptEvent.userChoice;
    if (outcome === 'accepted') {
      document.getElementById('install-prompt').classList.add('hidden');
    }
    state.installPromptEvent = null;
  });
  document.getElementById('install-dismiss').addEventListener('click', () => {
    document.getElementById('install-prompt').classList.add('hidden');
    localStorage.setItem('install_dismissed', '1');
  });

  // ESC لإغلاق العارض
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!document.getElementById('viewer-modal').classList.contains('hidden')) {
        closeViewer();
      }
    }
  });
}

// ============================================
// 20. التهيئة الأولية
// ============================================
async function init() {
  // تحميل الإعدادات المحفوظة
  state.language = localStorage.getItem(STORAGE_KEYS.LANG) || 'ar';
  state.theme = localStorage.getItem(STORAGE_KEYS.THEME) ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  state.notifications = localStorage.getItem(STORAGE_KEYS.NOTIF) === '1';
  document.getElementById('notif-toggle').checked = state.notifications;

  applyLanguage();
  applyTheme();

  // تحميل المستخدم المحفوظ
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.USER);
    if (saved) state.user = JSON.parse(saved);
  } catch {}

  // فتح قاعدة البيانات
  await openDB();
  await loadFiles();

  // إعداد المستمعين
  setupEventListeners();

  // إخفاء شاشة البداية
  setTimeout(() => {
    document.getElementById('splash-screen').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('splash-screen').remove();
      if (state.user) {
        showApp();
      } else {
        showAuth();
      }
    }, 300);
  }, 800);
}

init().catch(err => {
  console.error('Init failed:', err);
  document.getElementById('splash-screen').remove();
  showAuth();
});
