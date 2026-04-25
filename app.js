/* ============================================
   تطبيق الدراسة - StudyApp v2
   نظام صلاحيات: زائر / طالب / ممثل / مالك
   ============================================ */

// ============================================
// 1. الترجمات (i18n)
// ============================================
const translations = {
  ar: {
    welcome: 'مرحباً بك',
    profile_setup_sub: 'أدخل اسمك وصورتك للبدء',
    your_name: 'اسمك',
    choose_photo: 'اختر صورة',
    continue: 'متابعة',
    profile_local_note: 'بياناتك محفوظة على جهازك فقط.',
    home: 'الرئيسية',
    files: 'الملفات',
    favorites: 'المفضلة',
    subjects: 'المواد',
    schedule: 'الجدول',
    settings: 'الإعدادات',
    hello: 'مرحباً',
    welcome_msg: 'جاهز لجلسة دراسة منتجة؟',
    total_files: 'إجمالي الملفات',
    completed: 'مكتملة',
    study_hours: 'ساعات الدراسة',
    timer: 'المؤقت',
    pomodoro: 'المؤقت',
    minutes: 'دقيقة',
    focus: 'تركيز',
    short_break: 'استراحة قصيرة',
    long_break: 'استراحة طويلة',
    start: 'بدء',
    pause: 'إيقاف',
    reset: 'إعادة',
    today_plan: 'مخطط اليوم',
    no_tasks: 'لا توجد مهام لليوم',
    add_task: 'إضافة مهمة',
    task_placeholder: 'ماذا ستدرس اليوم؟',
    cancel: 'إلغاء',
    save: 'حفظ',
    close: 'إغلاق',
    search_files: 'ابحث في الملفات والملاحظات...',
    all: 'الكل',
    images: 'صور',
    videos: 'فيديو',
    drop_files: 'اسحب الملفات هنا أو اضغط للرفع',
    drop_hint: 'PDF · صور · فيديو',
    no_files: 'لا توجد ملفات بعد',
    no_favorites: 'لا توجد ملفات مفضلة',
    no_subjects: 'لا توجد مواد بعد — تواصل مع ممثل شعبتك',
    no_schedule: 'لا يوجد جدول بعد — تواصل مع ممثل شعبتك',
    account: 'الحساب',
    logout: 'تسجيل الخروج',
    preferences: 'التفضيلات',
    dark_mode: 'الوضع الليلي',
    dark_mode_desc: 'تبديل بين الفاتح والداكن',
    language: 'اللغة',
    language_desc: 'العربية / English',
    notifications: 'الإشعارات',
    notifications_desc: 'تذكيرات المؤقت والتنبيهات',
    study_stats: 'إحصائيات الدراسة',
    total_sessions: 'إجمالي الجلسات',
    total_minutes: 'إجمالي الدقائق',
    storage_used: 'المساحة المستخدمة',
    data: 'البيانات',
    clear_data: 'مسح جميع البيانات',
    diyala_university: 'جامعة ديالى',
    english_dept: 'قسم اللغة الإنجليزية',
    support_title: 'التواصل مع الدعم',
    support_desc: 'للاستفسارات والاقتراحات تواصل معنا عبر إنستغرام:',
    copyright: '© جميع الحقوق محفوظة - طه الشمري',
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
    confirm_clear: 'هل أنت متأكد من مسح جميع البيانات؟ سيتم مسح كل البيانات بما في ذلك الهيكل الإداري.',
    confirm_delete: 'حذف الملف نهائياً؟',
    pomodoro_done: 'انتهى الوقت!',
    break_done: 'انتهت الاستراحة، عد للتركيز!',
    delete: 'حذف',
    name_required: 'الرجاء إدخال الاسم',
    role_guest: 'زائر',
    role_student: 'طالب',
    role_rep: 'ممثل شعبة',
    role_owner: 'المالك',
    activation_title: 'كود التفعيل',
    activation_desc: 'أدخل كود الشعبة أو كود المالك للحصول على الصلاحيات.',
    enter_code: 'أدخل الكود',
    activate: 'تفعيل',
    exit_role: 'الخروج من الحساب الحالي',
    invalid_code: 'الكود غير صحيح',
    welcome_owner: 'مرحباً أيها المالك',
    welcome_student: 'تم تفعيل حسابك كطالب',
    welcome_rep: 'تم تفعيل حسابك كممثل',
    role_reset: 'تم تحويلك لزائر',
    owner_panel: 'لوحة المالك',
    owner_panel_desc: 'إدارة المراحل والشعب والأعضاء.',
    open_admin: 'فتح لوحة التحكم',
    rep_panel: 'لوحة ممثل الشعبة',
    rep_panel_desc: 'إدارة مواد وجدول وإشعارات شعبتك.',
    open_rep: 'فتح لوحة الممثل',
    structure: 'الهيكل',
    members: 'الأعضاء',
    reps: 'الممثلون',
    add_stage: 'إضافة مرحلة',
    add_section: 'إضافة شعبة',
    stage_name: 'اسم المرحلة',
    section_name: 'اسم الشعبة',
    code: 'الكود',
    no_stages: 'لا توجد مراحل — أضف مرحلة للبدء',
    no_sections: 'لا توجد شعب في هذه المرحلة',
    no_members: 'لا يوجد أعضاء مسجلون بعد',
    no_reps: 'لا يوجد ممثلون',
    promote: 'ترقية لممثل',
    demote: 'إزالة الترقية',
    confirm_delete_stage: 'حذف المرحلة وجميع شعبها؟',
    confirm_delete_section: 'حذف الشعبة؟',
    confirm_delete_subject: 'حذف المادة؟',
    confirm_delete_lecture: 'حذف هذا البند من الجدول؟',
    confirm_delete_member: 'حذف هذا العضو؟',
    confirm_delete_notif: 'حذف هذا التنبيه؟',
    members_count: 'عدد الأعضاء',
    section_code: 'كود الشعبة',
    copied: 'تم النسخ',
    member_joined: 'تاريخ الانضمام',
    add_subject: 'إضافة مادة',
    subject_name: 'اسم المادة',
    no_subject_files: 'لا توجد ملفات في هذه المادة',
    upload_lecture: 'رفع ملزمة',
    upload_question: 'رفع أسئلة',
    lectures: 'الملازم',
    questions: 'الأسئلة',
    add_lecture: 'إضافة محاضرة للجدول',
    lecture_subject: 'المادة',
    lecture_doctor: 'اسم الدكتور',
    lecture_day: 'اليوم',
    lecture_time: 'الوقت',
    day_sun: 'الأحد',
    day_mon: 'الإثنين',
    day_tue: 'الثلاثاء',
    day_wed: 'الأربعاء',
    day_thu: 'الخميس',
    day_fri: 'الجمعة',
    day_sat: 'السبت',
    send_notif: 'إرسال تنبيه',
    notif_message: 'محتوى التنبيه',
    sent: 'تم الإرسال',
    no_notifs_yet: 'لا توجد تنبيهات بعد',
    latest_notif: 'آخر التنبيهات',
    new_notif: 'تنبيه جديد من ممثل الشعبة',
    edit_profile: 'تعديل البروفايل',
    section_label: 'الشعبة',
    you: 'أنت',
    confirm_logout_role: 'هل تريد الخروج من حسابك الحالي والعودة كزائر؟',
    file_type_required: 'حدد نوع الملف',
    add: 'إضافة',
  },
  en: {
    welcome: 'Welcome',
    profile_setup_sub: 'Enter your name and photo to start',
    your_name: 'Your name',
    choose_photo: 'Choose photo',
    continue: 'Continue',
    profile_local_note: 'Your data is stored on your device only.',
    home: 'Home',
    files: 'Files',
    favorites: 'Favorites',
    subjects: 'Subjects',
    schedule: 'Schedule',
    settings: 'Settings',
    hello: 'Hello',
    welcome_msg: 'Ready for a productive study session?',
    total_files: 'Total Files',
    completed: 'Completed',
    study_hours: 'Study Hours',
    timer: 'Timer',
    pomodoro: 'Timer',
    minutes: 'minutes',
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
    close: 'Close',
    search_files: 'Search files and notes...',
    all: 'All',
    images: 'Images',
    videos: 'Videos',
    drop_files: 'Drag files here or tap to upload',
    drop_hint: 'PDF · Images · Video',
    no_files: 'No files yet',
    no_favorites: 'No favorite files',
    no_subjects: 'No subjects yet — contact your representative',
    no_schedule: 'No schedule yet — contact your representative',
    account: 'Account',
    logout: 'Sign Out',
    preferences: 'Preferences',
    dark_mode: 'Dark Mode',
    dark_mode_desc: 'Toggle between light and dark',
    language: 'Language',
    language_desc: 'English / العربية',
    notifications: 'Notifications',
    notifications_desc: 'Timer reminders and alerts',
    study_stats: 'Study Stats',
    total_sessions: 'Total Sessions',
    total_minutes: 'Total Minutes',
    storage_used: 'Storage Used',
    data: 'Data',
    clear_data: 'Clear All Data',
    diyala_university: 'University of Diyala',
    english_dept: 'Department of English',
    support_title: 'Contact Support',
    support_desc: 'For questions and suggestions reach us on Instagram:',
    copyright: '© All rights reserved - Taha Al-Shamry',
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
    confirm_clear: 'Are you sure you want to clear all data? This includes the admin structure.',
    confirm_delete: 'Delete file permanently?',
    pomodoro_done: 'Time\'s up!',
    break_done: 'Break is over, back to focus!',
    delete: 'Delete',
    name_required: 'Please enter your name',
    role_guest: 'Guest',
    role_student: 'Student',
    role_rep: 'Representative',
    role_owner: 'Owner',
    activation_title: 'Activation Code',
    activation_desc: 'Enter your section code or owner code to unlock features.',
    enter_code: 'Enter code',
    activate: 'Activate',
    exit_role: 'Exit current role',
    invalid_code: 'Invalid code',
    welcome_owner: 'Welcome, Owner',
    welcome_student: 'Activated as student',
    welcome_rep: 'Activated as representative',
    role_reset: 'You are back to guest',
    owner_panel: 'Owner Panel',
    owner_panel_desc: 'Manage stages, sections and members.',
    open_admin: 'Open Admin Panel',
    rep_panel: 'Representative Panel',
    rep_panel_desc: 'Manage your section\'s subjects, schedule and notifications.',
    open_rep: 'Open Rep Panel',
    structure: 'Structure',
    members: 'Members',
    reps: 'Representatives',
    add_stage: 'Add Stage',
    add_section: 'Add Section',
    stage_name: 'Stage name',
    section_name: 'Section name',
    code: 'Code',
    no_stages: 'No stages — add one to start',
    no_sections: 'No sections in this stage',
    no_members: 'No registered members yet',
    no_reps: 'No representatives',
    promote: 'Promote to Rep',
    demote: 'Remove Promotion',
    confirm_delete_stage: 'Delete stage and all its sections?',
    confirm_delete_section: 'Delete section?',
    confirm_delete_subject: 'Delete subject?',
    confirm_delete_lecture: 'Delete this schedule item?',
    confirm_delete_member: 'Remove this member?',
    confirm_delete_notif: 'Delete this notification?',
    members_count: 'Members count',
    section_code: 'Section code',
    copied: 'Copied',
    member_joined: 'Joined',
    add_subject: 'Add Subject',
    subject_name: 'Subject name',
    no_subject_files: 'No files in this subject',
    upload_lecture: 'Upload Lecture',
    upload_question: 'Upload Questions',
    lectures: 'Lectures',
    questions: 'Questions',
    add_lecture: 'Add Lecture',
    lecture_subject: 'Subject',
    lecture_doctor: 'Doctor name',
    lecture_day: 'Day',
    lecture_time: 'Time',
    day_sun: 'Sunday',
    day_mon: 'Monday',
    day_tue: 'Tuesday',
    day_wed: 'Wednesday',
    day_thu: 'Thursday',
    day_fri: 'Friday',
    day_sat: 'Saturday',
    send_notif: 'Send Notification',
    notif_message: 'Notification message',
    sent: 'Sent',
    no_notifs_yet: 'No notifications yet',
    latest_notif: 'Latest Notifications',
    new_notif: 'New notification from your rep',
    edit_profile: 'Edit Profile',
    section_label: 'Section',
    you: 'You',
    confirm_logout_role: 'Sign out and return as guest?',
    file_type_required: 'Choose file type',
    add: 'Add',
  },
};

// ============================================
// 2. الحالة العامة (State)
// ============================================
const OWNER_CODE = '98Taha11';
const DAYS = ['day_sun','day_mon','day_tue','day_wed','day_thu','day_fri','day_sat'];

const state = {
  profile: null,         // { id, name, photo, createdAt }
  role: { kind: 'guest', sectionId: null }, // guest | student | rep | owner
  language: 'ar',
  theme: 'light',
  files: [],
  filters: { type: 'all', search: '' },
  currentPage: 'home',
  currentFile: null,
  pomodoro: {
    duration: 25 * 60,
    remaining: 25 * 60,
    interval: null,
    running: false,
    mode: 'focus',
    customMinutes: 25,
  },
  pdfZoom: 1,
  videoSpeed: 1,
  notifications: false,
  installPromptEvent: null,
  // النظام الجديد
  structure: { stages: [] },          // { stages: [{id, name, sections: [{id, name, code, repProfileId?}]}] }
  members: [],                         // [{id, name, photo, sectionId, role, joinedAt}]
  subjects: {},                        // { [sectionId]: [{id, name}] }
  schedule: {},                        // { [sectionId]: [{id, subject, doctor, day, time}] }
  notifs: {},                          // { [sectionId]: [{id, message, time}] }
  seenNotifs: {},                      // { [sectionId]: lastSeenTimestamp }
  currentSubject: null,
  promptCallback: null,
};

const STORAGE_KEYS = {
  PROFILE: 'studyapp_profile',
  ROLE: 'studyapp_role',
  STRUCTURE: 'studyapp_structure',
  MEMBERS: 'studyapp_members',
  SUBJECTS: 'studyapp_subjects',
  SCHEDULE: 'studyapp_schedule',
  NOTIFS: 'studyapp_notifs',
  SEEN_NOTIFS: 'studyapp_seen_notifs',
  LANG: 'studyapp_lang',
  THEME: 'studyapp_theme',
  TASKS: 'studyapp_tasks',
  STATS: 'studyapp_stats',
  LAST_FILE: 'studyapp_last_file',
  NOTIF: 'studyapp_notif',
  TIMER_MIN: 'studyapp_timer_min',
};

// ============================================
// 3. IndexedDB لتخزين الملفات الكبيرة
// ============================================
const DB_NAME = 'studyapp_db';
const DB_VERSION = 2;
const STORE_FILES = 'files';
const STORE_BLOBS = 'blobs';
const STORE_MATERIALS = 'materials';   // { id, subjectId, name, type:'lecture'|'question', fileId, addedAt }

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
      if (!_db.objectStoreNames.contains(STORE_MATERIALS)) {
        const s = _db.createObjectStore(STORE_MATERIALS, { keyPath: 'id' });
        s.createIndex('subjectId', 'subjectId', { unique: false });
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
  const langLabel = document.getElementById('lang-label');
  if (langLabel) langLabel.textContent = state.language === 'ar' ? 'EN' : 'AR';
  const langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = state.language;
}

// ============================================
// 5. الثيم
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
// 6. البروفايل (الاسم + الصورة)
// ============================================
function loadProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROFILE);
    state.profile = raw ? JSON.parse(raw) : null;
  } catch { state.profile = null; }
}

function saveProfile() {
  localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(state.profile));
}

function ensureProfileId() {
  if (!state.profile.id) {
    state.profile.id = 'p_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
  }
}

async function readImageAsDataUrl(file, maxDim = 320) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const ratio = Math.min(maxDim / img.width, maxDim / img.height, 1);
        const w = img.width * ratio;
        const h = img.height * ratio;
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function showProfileSetup(editing = false) {
  const screen = document.getElementById('profile-setup');
  screen.classList.remove('hidden');
  document.getElementById('app').classList.add('hidden');
  if (editing && state.profile) {
    document.getElementById('profile-name-input').value = state.profile.name || '';
    setProfilePreview(state.profile.photo);
  } else {
    document.getElementById('profile-name-input').value = '';
    setProfilePreview(null);
  }
}

function setProfilePreview(dataUrl) {
  const preview = document.getElementById('profile-pic-preview');
  if (dataUrl) {
    preview.innerHTML = `<img src="${dataUrl}" alt="" />`;
    preview.dataset.photo = dataUrl;
  } else {
    preview.innerHTML = `
      <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>`;
    delete preview.dataset.photo;
  }
}

async function saveProfileFromForm() {
  const name = document.getElementById('profile-name-input').value.trim();
  if (!name) {
    showToast(t('name_required'));
    return;
  }
  const preview = document.getElementById('profile-pic-preview');
  const photo = preview.dataset.photo || (state.profile && state.profile.photo) || null;
  state.profile = state.profile || { createdAt: Date.now() };
  state.profile.name = name;
  state.profile.photo = photo;
  ensureProfileId();
  saveProfile();
  // تحديث بيانات العضو إن كان مسجلاً
  syncMemberSnapshot();
  // إغلاق شاشة الإعداد وعرض التطبيق
  document.getElementById('profile-setup').classList.add('hidden');
  showApp();
}

// ============================================
// 7. الصلاحيات (الأدوار / الأكواد)
// ============================================
function loadRole() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ROLE);
    state.role = raw ? JSON.parse(raw) : { kind: 'guest', sectionId: null };
  } catch { state.role = { kind: 'guest', sectionId: null }; }
}

function saveRole() {
  localStorage.setItem(STORAGE_KEYS.ROLE, JSON.stringify(state.role));
}

function tryActivateCode(code) {
  const trimmed = (code || '').trim();
  if (!trimmed) return false;
  // كود المالك
  if (trimmed === OWNER_CODE) {
    state.role = { kind: 'owner', sectionId: null };
    saveRole();
    syncMemberSnapshot();
    showToast(t('welcome_owner'));
    refreshAll();
    return true;
  }
  // البحث في أكواد الشعب
  for (const stage of state.structure.stages) {
    for (const section of stage.sections) {
      if (section.code && section.code === trimmed) {
        // طالب أو ممثل؟
        const isRep = section.repProfileId && state.profile && section.repProfileId === state.profile.id;
        state.role = { kind: isRep ? 'rep' : 'student', sectionId: section.id };
        saveRole();
        syncMemberSnapshot();
        showToast(isRep ? t('welcome_rep') : t('welcome_student'));
        refreshAll();
        return true;
      }
    }
  }
  showToast(t('invalid_code'));
  return false;
}

function logoutRole() {
  if (!confirm(t('confirm_logout_role'))) return;
  state.role = { kind: 'guest', sectionId: null };
  saveRole();
  showToast(t('role_reset'));
  refreshAll();
}

// تحديث بيانات الأعضاء (الاسم/الصورة/الدور) عند تغير شيء
function syncMemberSnapshot() {
  if (!state.profile) return;
  if (state.role.kind === 'guest' || state.role.kind === 'owner') return;
  // إضافة/تحديث في قائمة الأعضاء المحلية (المالك يرى أعضاء جهازه)
  const idx = state.members.findIndex(m => m.id === state.profile.id && m.sectionId === state.role.sectionId);
  const member = {
    id: state.profile.id,
    name: state.profile.name,
    photo: state.profile.photo || null,
    sectionId: state.role.sectionId,
    role: state.role.kind,
    joinedAt: idx >= 0 ? state.members[idx].joinedAt : Date.now(),
  };
  if (idx >= 0) state.members[idx] = member;
  else state.members.push(member);
  saveMembers();
}

function saveMembers() {
  localStorage.setItem(STORAGE_KEYS.MEMBERS, JSON.stringify(state.members));
}

function loadMembers() {
  try { state.members = JSON.parse(localStorage.getItem(STORAGE_KEYS.MEMBERS) || '[]'); }
  catch { state.members = []; }
}

// ============================================
// 8. الهيكل (مراحل/شعب)
// ============================================
function loadStructure() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STRUCTURE);
    state.structure = raw ? JSON.parse(raw) : { stages: [] };
  } catch { state.structure = { stages: [] }; }
}

function saveStructure() {
  localStorage.setItem(STORAGE_KEYS.STRUCTURE, JSON.stringify(state.structure));
}

function genCode(prefix = '') {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = prefix;
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

function uid(prefix = 'i') {
  return prefix + '_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
}

function findSection(sectionId) {
  for (const st of state.structure.stages) {
    const s = st.sections.find(x => x.id === sectionId);
    if (s) return { stage: st, section: s };
  }
  return null;
}

function addStage(name) {
  state.structure.stages.push({ id: uid('stg'), name, sections: [] });
  saveStructure();
}

function deleteStage(stageId) {
  state.structure.stages = state.structure.stages.filter(s => s.id !== stageId);
  saveStructure();
}

function addSection(stageId, name) {
  const stage = state.structure.stages.find(s => s.id === stageId);
  if (!stage) return;
  stage.sections.push({ id: uid('sec'), name, code: genCode(), repProfileId: null });
  saveStructure();
}

function deleteSection(sectionId) {
  for (const stage of state.structure.stages) {
    stage.sections = stage.sections.filter(s => s.id !== sectionId);
  }
  saveStructure();
}

function regenSectionCode(sectionId) {
  const found = findSection(sectionId);
  if (!found) return;
  found.section.code = genCode();
  saveStructure();
}

function promoteMember(memberId) {
  const member = state.members.find(m => m.id === memberId);
  if (!member) return;
  const found = findSection(member.sectionId);
  if (!found) return;
  found.section.repProfileId = member.id;
  member.role = 'rep';
  saveStructure();
  saveMembers();
  // إن كان هذا الجهاز هو الممثل، حدّث الدور
  if (state.profile && state.profile.id === member.id && state.role.sectionId === member.sectionId) {
    state.role = { kind: 'rep', sectionId: member.sectionId };
    saveRole();
  }
}

function demoteRep(sectionId) {
  const found = findSection(sectionId);
  if (!found) return;
  const repId = found.section.repProfileId;
  found.section.repProfileId = null;
  saveStructure();
  if (repId) {
    const m = state.members.find(x => x.id === repId);
    if (m) { m.role = 'student'; saveMembers(); }
  }
  if (state.profile && state.profile.id === repId && state.role.sectionId === sectionId) {
    state.role = { kind: 'student', sectionId };
    saveRole();
  }
}

// ============================================
// 9. المواد المنهجية
// ============================================
function loadSubjects() {
  try { state.subjects = JSON.parse(localStorage.getItem(STORAGE_KEYS.SUBJECTS) || '{}'); }
  catch { state.subjects = {}; }
}

function saveSubjects() {
  localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(state.subjects));
}

function getSubjects(sectionId) {
  return state.subjects[sectionId] || [];
}

function addSubject(sectionId, name) {
  if (!state.subjects[sectionId]) state.subjects[sectionId] = [];
  state.subjects[sectionId].push({ id: uid('sub'), name });
  saveSubjects();
}

function deleteSubject(sectionId, subjectId) {
  if (!state.subjects[sectionId]) return;
  state.subjects[sectionId] = state.subjects[sectionId].filter(s => s.id !== subjectId);
  saveSubjects();
}

// ============================================
// 10. الجدول الدراسي
// ============================================
function loadSchedule() {
  try { state.schedule = JSON.parse(localStorage.getItem(STORAGE_KEYS.SCHEDULE) || '{}'); }
  catch { state.schedule = {}; }
}

function saveSchedule() {
  localStorage.setItem(STORAGE_KEYS.SCHEDULE, JSON.stringify(state.schedule));
}

function getSchedule(sectionId) {
  return state.schedule[sectionId] || [];
}

function addLecture(sectionId, lecture) {
  if (!state.schedule[sectionId]) state.schedule[sectionId] = [];
  state.schedule[sectionId].push({ id: uid('lec'), ...lecture });
  saveSchedule();
}

function deleteLecture(sectionId, lectureId) {
  if (!state.schedule[sectionId]) return;
  state.schedule[sectionId] = state.schedule[sectionId].filter(l => l.id !== lectureId);
  saveSchedule();
}

// ============================================
// 11. الإشعارات
// ============================================
function loadNotifs() {
  try { state.notifs = JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTIFS) || '{}'); }
  catch { state.notifs = {}; }
  try { state.seenNotifs = JSON.parse(localStorage.getItem(STORAGE_KEYS.SEEN_NOTIFS) || '{}'); }
  catch { state.seenNotifs = {}; }
}

function saveNotifs() {
  localStorage.setItem(STORAGE_KEYS.NOTIFS, JSON.stringify(state.notifs));
}

function saveSeenNotifs() {
  localStorage.setItem(STORAGE_KEYS.SEEN_NOTIFS, JSON.stringify(state.seenNotifs));
}

function getNotifs(sectionId) {
  return (state.notifs[sectionId] || []).slice().sort((a,b) => b.time - a.time);
}

function addNotif(sectionId, message) {
  if (!state.notifs[sectionId]) state.notifs[sectionId] = [];
  state.notifs[sectionId].push({ id: uid('ntf'), message, time: Date.now() });
  saveNotifs();
}

function deleteNotif(sectionId, id) {
  if (!state.notifs[sectionId]) return;
  state.notifs[sectionId] = state.notifs[sectionId].filter(n => n.id !== id);
  saveNotifs();
}

function markNotifsSeen(sectionId) {
  state.seenNotifs[sectionId] = Date.now();
  saveSeenNotifs();
}

// ============================================
// 12. التنقل بين الصفحات
// ============================================
function navigate(page) {
  // منع الزائر من فتح المواد/الجدول
  if ((page === 'subjects' || page === 'schedule') && state.role.kind === 'guest') {
    showToast(state.language === 'ar' ? 'فعّل كود الشعبة أولاً' : 'Activate your section code first');
    page = 'home';
  }
  state.currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pageEl = document.getElementById(`page-${page}`);
  if (pageEl) pageEl.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.page === page));
  document.getElementById('page-title').textContent = t(page);
  if (page === 'files') renderFiles();
  if (page === 'favorites') renderFavorites();
  if (page === 'home') refreshHome();
  if (page === 'settings') refreshSettings();
  if (page === 'subjects') renderSubjectsPage();
  if (page === 'schedule') renderSchedulePage();
  document.querySelector('.app-main')?.scrollTo(0, 0);
}

// ============================================
// 13. تحديث الواجهة حسب الدور
// ============================================
function applyRoleUI() {
  const isAcademic = state.role.kind === 'student' || state.role.kind === 'rep';
  // إظهار/إخفاء عناصر التنقل الأكاديمية
  document.querySelectorAll('.nav-academic').forEach(el => {
    el.classList.toggle('hidden', !isAcademic);
  });
  // البطاقات في الإعدادات
  document.getElementById('owner-card').classList.toggle('hidden', state.role.kind !== 'owner');
  document.getElementById('rep-card').classList.toggle('hidden', state.role.kind !== 'rep');
  document.getElementById('logout-role-btn').classList.toggle('hidden', state.role.kind === 'guest');
  // التحية
  updateUserGreeting();
  updateRoleBadge();
  updateProfileDisplay();
  updateRepNotifCard();
}

function updateUserGreeting() {
  const name = state.profile?.name || (state.language === 'ar' ? 'صديقي' : 'friend');
  const el = document.getElementById('user-greeting');
  if (el) el.textContent = name;
}

function updateRoleBadge() {
  const el = document.getElementById('role-badge');
  if (!el) return;
  const map = { guest:'role_guest', student:'role_student', rep:'role_rep', owner:'role_owner' };
  el.textContent = t(map[state.role.kind]);
  el.className = 'role-badge role-' + state.role.kind;
}

function updateProfileDisplay() {
  const photoUrl = state.profile?.photo;
  // صورة الترحيب
  const wp = document.getElementById('welcome-pic');
  if (wp) {
    if (photoUrl) wp.innerHTML = `<img src="${photoUrl}" alt="" />`;
    else wp.innerHTML = `
      <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>`;
  }
  // صورة الإعدادات
  const sp = document.getElementById('settings-profile-pic');
  if (sp) {
    if (photoUrl) sp.innerHTML = `<img src="${photoUrl}" alt="" />`;
    else sp.innerHTML = `
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>`;
  }
  const nameEl = document.getElementById('settings-user');
  if (nameEl) nameEl.textContent = state.profile?.name || t('role_guest');
  const roleEl = document.getElementById('settings-user-role');
  const map = { guest:'role_guest', student:'role_student', rep:'role_rep', owner:'role_owner' };
  if (roleEl) roleEl.textContent = t(map[state.role.kind]);
  // اسم الشعبة
  const secEl = document.getElementById('settings-user-section');
  if (secEl) {
    if (state.role.sectionId) {
      const found = findSection(state.role.sectionId);
      secEl.textContent = found ? `${found.stage.name} · ${found.section.name}` : '';
    } else secEl.textContent = '';
  }
}

function updateRepNotifCard() {
  const card = document.getElementById('rep-notif-card');
  if (!card) return;
  if (!state.role.sectionId || state.role.kind === 'guest' || state.role.kind === 'owner') {
    card.classList.add('hidden');
    return;
  }
  const list = getNotifs(state.role.sectionId);
  if (list.length === 0) {
    card.classList.add('hidden');
    return;
  }
  card.classList.remove('hidden');
  const recent = list.slice(0, 3);
  document.getElementById('notif-count').textContent = list.length;
  document.getElementById('notif-list-home').innerHTML = recent.map(n => `
    <div class="notif-item">
      <div class="notif-bullet"></div>
      <div class="notif-content">
        <p>${escapeHtml(n.message)}</p>
        <small>${formatDate(n.time)}</small>
      </div>
    </div>
  `).join('');
  markNotifsSeen(state.role.sectionId);
}

// ============================================
// 14. صفحة المواد (للطالب/الممثل)
// ============================================
function renderSubjectsPage() {
  const grid = document.getElementById('subjects-grid');
  const empty = document.getElementById('subjects-empty');
  const sub = document.getElementById('subjects-section-name');
  if (!state.role.sectionId) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    sub.textContent = '';
    return;
  }
  const found = findSection(state.role.sectionId);
  sub.textContent = found ? `${found.stage.name} · ${found.section.name}` : '';
  const list = getSubjects(state.role.sectionId);
  if (list.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');
  grid.innerHTML = list.map(sub => `
    <div class="subject-card" data-id="${sub.id}">
      <div class="subject-icon">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      </div>
      <div class="subject-name">${escapeHtml(sub.name)}</div>
    </div>
  `).join('');
  grid.querySelectorAll('.subject-card').forEach(el => {
    el.addEventListener('click', () => openSubjectModal(el.dataset.id));
  });
}

async function openSubjectModal(subjectId) {
  const subjects = getSubjects(state.role.sectionId);
  const subject = subjects.find(s => s.id === subjectId);
  if (!subject) return;
  state.currentSubject = subject;
  document.getElementById('subject-modal-title').textContent = subject.name;
  await renderSubjectMaterials();
  document.getElementById('subject-modal').classList.remove('hidden');
}

async function renderSubjectMaterials() {
  const body = document.getElementById('subject-modal-body');
  const all = await dbGetAll(STORE_MATERIALS);
  const mats = all.filter(m => m.subjectId === state.currentSubject.id);
  const lectures = mats.filter(m => m.type === 'lecture');
  const questions = mats.filter(m => m.type === 'question');
  const isRep = state.role.kind === 'rep';
  body.innerHTML = `
    <div class="subject-section">
      <div class="subject-section-head">
        <h4>${t('lectures')}</h4>
        ${isRep ? `<button class="btn btn-primary btn-sm" id="upload-lecture-btn"><span>+</span> ${t('upload_lecture')}</button>` : ''}
      </div>
      <div class="materials-list">
        ${lectures.length === 0 ? `<div class="empty-mini">${t('no_subject_files')}</div>` : lectures.map(materialItemHTML).join('')}
      </div>
    </div>
    <div class="subject-section">
      <div class="subject-section-head">
        <h4>${t('questions')}</h4>
        ${isRep ? `<button class="btn btn-primary btn-sm" id="upload-question-btn"><span>+</span> ${t('upload_question')}</button>` : ''}
      </div>
      <div class="materials-list">
        ${questions.length === 0 ? `<div class="empty-mini">${t('no_subject_files')}</div>` : questions.map(materialItemHTML).join('')}
      </div>
    </div>
  `;
  body.querySelectorAll('.material-item').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('.material-del')) return;
      openViewer(el.dataset.fileId);
    });
  });
  body.querySelectorAll('.material-del').forEach(el => {
    el.addEventListener('click', async (e) => {
      e.stopPropagation();
      if (!confirm(t('confirm_delete'))) return;
      const id = el.dataset.matId;
      const fileId = el.dataset.fileId;
      await dbDelete(STORE_MATERIALS, id);
      await dbDelete(STORE_FILES, fileId);
      await dbDelete(STORE_BLOBS, fileId);
      await loadFiles();
      await renderSubjectMaterials();
    });
  });
  if (isRep) {
    const lectureBtn = body.querySelector('#upload-lecture-btn');
    const questionBtn = body.querySelector('#upload-question-btn');
    if (lectureBtn) lectureBtn.addEventListener('click', () => triggerMaterialUpload('lecture'));
    if (questionBtn) questionBtn.addEventListener('click', () => triggerMaterialUpload('question'));
  }
}

function materialItemHTML(m) {
  const isRep = state.role.kind === 'rep';
  return `
    <div class="material-item" data-file-id="${m.fileId}">
      <div class="material-icon">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
      </div>
      <div class="material-info">
        <div class="material-name">${escapeHtml(m.name)}</div>
        <div class="material-meta">${formatDate(m.addedAt)}</div>
      </div>
      ${isRep ? `<button class="material-del icon-btn-sm" data-mat-id="${m.id}" data-file-id="${m.fileId}" aria-label="Delete">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>` : ''}
    </div>
  `;
}

function triggerMaterialUpload(matType) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.pdf,image/*,video/*';
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const meta = await uploadFile(file);
    if (!meta) return;
    const mat = {
      id: uid('mat'),
      subjectId: state.currentSubject.id,
      name: file.name,
      type: matType,
      fileId: meta.id,
      addedAt: Date.now(),
    };
    await dbPut(STORE_MATERIALS, mat);
    await renderSubjectMaterials();
  };
  input.click();
}

// ============================================
// 15. صفحة الجدول (للطالب/الممثل)
// ============================================
function renderSchedulePage() {
  const list = document.getElementById('schedule-list');
  const empty = document.getElementById('schedule-empty');
  const sub = document.getElementById('schedule-section-name');
  if (!state.role.sectionId) {
    list.innerHTML = '';
    empty.classList.remove('hidden');
    sub.textContent = '';
    return;
  }
  const found = findSection(state.role.sectionId);
  sub.textContent = found ? `${found.stage.name} · ${found.section.name}` : '';
  const lectures = getSchedule(state.role.sectionId);
  if (lectures.length === 0) {
    list.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');
  // تجميع حسب اليوم
  const byDay = {};
  lectures.forEach(l => {
    if (!byDay[l.day]) byDay[l.day] = [];
    byDay[l.day].push(l);
  });
  list.innerHTML = DAYS.filter(d => byDay[d]).map(d => `
    <div class="schedule-day">
      <h4 class="schedule-day-name">${t(d)}</h4>
      <div class="schedule-day-items">
        ${byDay[d].sort((a,b) => (a.time||'').localeCompare(b.time||'')).map(l => `
          <div class="schedule-item">
            <div class="schedule-time">${escapeHtml(l.time || '')}</div>
            <div class="schedule-info">
              <div class="schedule-subject">${escapeHtml(l.subject)}</div>
              <div class="schedule-doctor">${escapeHtml(l.doctor || '')}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ============================================
// 16. لوحة المالك (Admin)
// ============================================
function openAdminPanel() {
  document.getElementById('admin-modal').classList.remove('hidden');
  switchAdminTab('structure');
}

function closeAdminPanel() {
  document.getElementById('admin-modal').classList.add('hidden');
}

function switchAdminTab(tab) {
  document.querySelectorAll('#admin-modal .admin-tab').forEach(el => {
    el.classList.toggle('active', el.dataset.tab === tab);
  });
  document.querySelectorAll('#admin-modal .admin-pane').forEach(el => {
    el.classList.toggle('active', el.id === `admin-pane-${tab}`);
  });
  if (tab === 'structure') renderAdminStructure();
  if (tab === 'members') renderAdminMembers();
  if (tab === 'reps') renderAdminReps();
}

function renderAdminStructure() {
  const pane = document.getElementById('admin-pane-structure');
  let html = `<button class="btn btn-primary btn-block" id="add-stage-btn">+ ${t('add_stage')}</button>`;
  if (state.structure.stages.length === 0) {
    html += `<div class="empty-mini">${t('no_stages')}</div>`;
  } else {
    html += state.structure.stages.map(stage => `
      <div class="stage-card">
        <div class="stage-head">
          <h4>${escapeHtml(stage.name)}</h4>
          <div class="stage-actions">
            <button class="btn btn-ghost btn-sm" data-add-section="${stage.id}">+ ${t('add_section')}</button>
            <button class="icon-btn-sm danger" data-del-stage="${stage.id}" aria-label="Delete">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg>
            </button>
          </div>
        </div>
        <div class="sections-list">
          ${stage.sections.length === 0 ? `<div class="empty-mini">${t('no_sections')}</div>` : stage.sections.map(sec => {
            const memCount = state.members.filter(m => m.sectionId === sec.id).length;
            const repName = sec.repProfileId ? (state.members.find(m => m.id === sec.repProfileId)?.name || '—') : '—';
            return `
              <div class="section-card">
                <div class="section-head">
                  <span class="section-name">${escapeHtml(sec.name)}</span>
                  <button class="icon-btn-sm danger" data-del-section="${sec.id}" aria-label="Delete">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                </div>
                <div class="section-meta">
                  <div class="code-row">
                    <span class="code-label">${t('section_code')}:</span>
                    <code class="code-value">${escapeHtml(sec.code)}</code>
                    <button class="btn btn-ghost btn-sm" data-copy="${escapeHtml(sec.code)}">${t('copied').replace('تم النسخ','نسخ').replace('Copied','Copy')}</button>
                    <button class="btn btn-ghost btn-sm" data-regen="${sec.id}">⟳</button>
                  </div>
                  <div class="meta-row"><span>${t('members_count')}:</span> <strong>${memCount}</strong></div>
                  <div class="meta-row"><span>${t('role_rep')}:</span> <strong>${escapeHtml(repName)}</strong></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `).join('');
  }
  pane.innerHTML = html;
  // أحداث
  pane.querySelector('#add-stage-btn').addEventListener('click', () => {
    openPrompt(t('add_stage'), [{label: t('stage_name')}], (vals) => {
      if (vals[0].trim()) {
        addStage(vals[0].trim());
        renderAdminStructure();
      }
    });
  });
  pane.querySelectorAll('[data-add-section]').forEach(el => {
    el.addEventListener('click', () => {
      const stageId = el.dataset.addSection;
      openPrompt(t('add_section'), [{label: t('section_name')}], (vals) => {
        if (vals[0].trim()) {
          addSection(stageId, vals[0].trim());
          renderAdminStructure();
        }
      });
    });
  });
  pane.querySelectorAll('[data-del-stage]').forEach(el => {
    el.addEventListener('click', () => {
      if (!confirm(t('confirm_delete_stage'))) return;
      deleteStage(el.dataset.delStage);
      renderAdminStructure();
    });
  });
  pane.querySelectorAll('[data-del-section]').forEach(el => {
    el.addEventListener('click', () => {
      if (!confirm(t('confirm_delete_section'))) return;
      deleteSection(el.dataset.delSection);
      renderAdminStructure();
    });
  });
  pane.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', () => {
      const code = el.dataset.copy;
      try { navigator.clipboard.writeText(code); showToast(t('copied')); } catch {}
    });
  });
  pane.querySelectorAll('[data-regen]').forEach(el => {
    el.addEventListener('click', () => {
      regenSectionCode(el.dataset.regen);
      renderAdminStructure();
    });
  });
}

function renderAdminMembers() {
  const pane = document.getElementById('admin-pane-members');
  if (state.members.length === 0) {
    pane.innerHTML = `<div class="empty-mini">${t('no_members')}</div>`;
    return;
  }
  // تجميع حسب الشعبة
  const grouped = {};
  state.members.forEach(m => {
    if (!grouped[m.sectionId]) grouped[m.sectionId] = [];
    grouped[m.sectionId].push(m);
  });
  let html = '';
  Object.keys(grouped).forEach(sid => {
    const found = findSection(sid);
    const sectionLabel = found ? `${found.stage.name} · ${found.section.name}` : '—';
    html += `
      <div class="members-group">
        <div class="members-group-head">
          <h4>${escapeHtml(sectionLabel)}</h4>
          <span class="badge">${grouped[sid].length}</span>
        </div>
        <div class="members-list">
          ${grouped[sid].map(m => `
            <div class="member-row" data-mid="${m.id}">
              <div class="member-pic">
                ${m.photo ? `<img src="${m.photo}" alt="" />` : `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`}
              </div>
              <div class="member-info">
                <div class="member-name">${escapeHtml(m.name)}${state.profile && state.profile.id === m.id ? ` <span class="self-tag">(${t('you')})</span>` : ''}</div>
                <div class="member-role">${t(m.role === 'rep' ? 'role_rep' : 'role_student')}</div>
              </div>
              <div class="member-actions">
                ${m.role !== 'rep' ? `<button class="btn btn-primary btn-sm" data-promote="${m.id}">${t('promote')}</button>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });
  pane.innerHTML = html;
  pane.querySelectorAll('.member-row').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      openMemberModal(el.dataset.mid);
    });
  });
  pane.querySelectorAll('[data-promote]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      promoteMember(el.dataset.promote);
      renderAdminMembers();
      renderAdminStructure();
    });
  });
}

function renderAdminReps() {
  const pane = document.getElementById('admin-pane-reps');
  let reps = [];
  state.structure.stages.forEach(stage => {
    stage.sections.forEach(sec => {
      if (sec.repProfileId) {
        const member = state.members.find(m => m.id === sec.repProfileId);
        reps.push({ stage, section: sec, member });
      }
    });
  });
  if (reps.length === 0) {
    pane.innerHTML = `<div class="empty-mini">${t('no_reps')}</div>`;
    return;
  }
  pane.innerHTML = reps.map(r => `
    <div class="member-row">
      <div class="member-pic">
        ${r.member?.photo ? `<img src="${r.member.photo}" alt="" />` : `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`}
      </div>
      <div class="member-info">
        <div class="member-name">${escapeHtml(r.member?.name || '—')}</div>
        <div class="member-role">${escapeHtml(r.stage.name)} · ${escapeHtml(r.section.name)}</div>
      </div>
      <div class="member-actions">
        <button class="btn btn-ghost btn-sm danger" data-demote="${r.section.id}">${t('demote')}</button>
      </div>
    </div>
  `).join('');
  pane.querySelectorAll('[data-demote]').forEach(el => {
    el.addEventListener('click', () => {
      demoteRep(el.dataset.demote);
      renderAdminReps();
      renderAdminStructure();
      renderAdminMembers();
    });
  });
}

function openMemberModal(memberId) {
  const m = state.members.find(x => x.id === memberId);
  if (!m) return;
  const found = findSection(m.sectionId);
  const pic = document.getElementById('member-modal-pic');
  pic.innerHTML = m.photo ? `<img src="${m.photo}" alt="" />` : `<svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
  document.getElementById('member-modal-name').textContent = m.name;
  document.getElementById('member-modal-role').textContent = t(m.role === 'rep' ? 'role_rep' : 'role_student');
  document.getElementById('member-modal-section').textContent = found ? `${found.stage.name} · ${found.section.name}` : '';
  document.getElementById('member-modal-joined').textContent = `${t('member_joined')}: ${formatDate(m.joinedAt)}`;
  document.getElementById('member-modal').classList.remove('hidden');
}

// ============================================
// 17. لوحة الممثل (Rep)
// ============================================
function openRepPanel() {
  if (state.role.kind !== 'rep') return;
  document.getElementById('rep-modal').classList.remove('hidden');
  switchRepTab('rep-subjects');
}

function closeRepPanel() {
  document.getElementById('rep-modal').classList.add('hidden');
}

function switchRepTab(tab) {
  document.querySelectorAll('#rep-modal .admin-tab').forEach(el => {
    el.classList.toggle('active', el.dataset.tab === tab);
  });
  document.querySelectorAll('#rep-modal .admin-pane').forEach(el => {
    el.classList.toggle('active', el.id === `rep-pane-${tab.replace('rep-','')}`);
  });
  if (tab === 'rep-subjects') renderRepSubjects();
  if (tab === 'rep-schedule') renderRepSchedule();
  if (tab === 'rep-notifs') renderRepNotifs();
}

function renderRepSubjects() {
  const pane = document.getElementById('rep-pane-subjects');
  const sectionId = state.role.sectionId;
  const list = getSubjects(sectionId);
  pane.innerHTML = `
    <button class="btn btn-primary btn-block" id="add-subject-btn">+ ${t('add_subject')}</button>
    <div class="subjects-grid">
      ${list.map(sub => `
        <div class="subject-card">
          <div class="subject-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <div class="subject-name">${escapeHtml(sub.name)}</div>
          <button class="subject-del" data-del-subject="${sub.id}" aria-label="Delete">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      `).join('')}
    </div>
    ${list.length === 0 ? `<div class="empty-mini">${t('no_subjects')}</div>` : ''}
  `;
  pane.querySelector('#add-subject-btn').addEventListener('click', () => {
    openPrompt(t('add_subject'), [{label: t('subject_name')}], (vals) => {
      if (vals[0].trim()) {
        addSubject(sectionId, vals[0].trim());
        renderRepSubjects();
      }
    });
  });
  pane.querySelectorAll('[data-del-subject]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!confirm(t('confirm_delete_subject'))) return;
      deleteSubject(sectionId, el.dataset.delSubject);
      renderRepSubjects();
    });
  });
  pane.querySelectorAll('.subject-card').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      const id = el.querySelector('[data-del-subject]')?.dataset.delSubject;
      if (id) {
        // فتح المادة لإدارة المواد
        state.role.sectionId && openSubjectModal(id);
      }
    });
  });
}

function renderRepSchedule() {
  const pane = document.getElementById('rep-pane-schedule');
  const sectionId = state.role.sectionId;
  const lectures = getSchedule(sectionId);
  pane.innerHTML = `
    <button class="btn btn-primary btn-block" id="add-lecture-btn">+ ${t('add_lecture')}</button>
    <div class="schedule-list">
      ${lectures.length === 0 ? `<div class="empty-mini">${t('no_schedule')}</div>` : lectures.map(l => `
        <div class="schedule-edit-item">
          <div class="schedule-edit-info">
            <div class="schedule-subject">${escapeHtml(l.subject)}</div>
            <div class="schedule-meta">${escapeHtml(l.doctor || '')} · ${t(l.day)} · ${escapeHtml(l.time || '')}</div>
          </div>
          <button class="icon-btn-sm danger" data-del-lec="${l.id}" aria-label="Delete">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg>
          </button>
        </div>
      `).join('')}
    </div>
  `;
  pane.querySelector('#add-lecture-btn').addEventListener('click', () => {
    openPrompt(t('add_lecture'), [
      {label: t('lecture_subject')},
      {label: t('lecture_doctor')},
      {label: t('lecture_day') + ' (sun/mon/tue/wed/thu/fri/sat)'},
      {label: t('lecture_time') + ' (08:00)', type: 'time'},
    ], (vals) => {
      const subject = vals[0].trim();
      if (!subject) return;
      const doctor = vals[1].trim();
      const dayInput = vals[2].trim().toLowerCase();
      const dayKey = 'day_' + (dayInput.slice(0,3) || 'sun');
      const day = DAYS.includes(dayKey) ? dayKey : 'day_sun';
      const time = vals[3].trim() || '00:00';
      addLecture(sectionId, { subject, doctor, day, time });
      renderRepSchedule();
    });
  });
  pane.querySelectorAll('[data-del-lec]').forEach(el => {
    el.addEventListener('click', () => {
      if (!confirm(t('confirm_delete_lecture'))) return;
      deleteLecture(sectionId, el.dataset.delLec);
      renderRepSchedule();
    });
  });
}

function renderRepNotifs() {
  const pane = document.getElementById('rep-pane-notifs');
  const sectionId = state.role.sectionId;
  const list = getNotifs(sectionId);
  pane.innerHTML = `
    <button class="btn btn-primary btn-block" id="send-notif-btn">+ ${t('send_notif')}</button>
    <div class="notif-list">
      ${list.length === 0 ? `<div class="empty-mini">${t('no_notifs_yet')}</div>` : list.map(n => `
        <div class="notif-edit-item">
          <div class="notif-edit-content">
            <p>${escapeHtml(n.message)}</p>
            <small>${formatDate(n.time)}</small>
          </div>
          <button class="icon-btn-sm danger" data-del-notif="${n.id}" aria-label="Delete">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg>
          </button>
        </div>
      `).join('')}
    </div>
  `;
  pane.querySelector('#send-notif-btn').addEventListener('click', () => {
    openPrompt(t('send_notif'), [{label: t('notif_message')}], (vals) => {
      const msg = vals[0].trim();
      if (!msg) return;
      addNotif(sectionId, msg);
      sendNotification(t('new_notif'));
      showToast(t('sent'));
      renderRepNotifs();
      updateRepNotifCard();
    });
  });
  pane.querySelectorAll('[data-del-notif]').forEach(el => {
    el.addEventListener('click', () => {
      if (!confirm(t('confirm_delete_notif'))) return;
      deleteNotif(sectionId, el.dataset.delNotif);
      renderRepNotifs();
    });
  });
}

// ============================================
// 18. نافذة الإدخال العامة (prompt)
// ============================================
function openPrompt(title, fields, callback) {
  const modal = document.getElementById('prompt-modal');
  document.getElementById('prompt-title').textContent = title;
  const inputs = ['prompt-input','prompt-input2','prompt-input3','prompt-input4'];
  inputs.forEach((id, i) => {
    const el = document.getElementById(id);
    el.value = '';
    if (i < fields.length) {
      el.placeholder = fields[i].label;
      el.type = fields[i].type || 'text';
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });
  state.promptCallback = (vals) => callback(vals);
  modal.classList.remove('hidden');
  setTimeout(() => document.getElementById('prompt-input').focus(), 50);
}

function submitPrompt() {
  const vals = ['prompt-input','prompt-input2','prompt-input3','prompt-input4'].map(id => document.getElementById(id).value);
  document.getElementById('prompt-modal').classList.add('hidden');
  if (state.promptCallback) {
    const cb = state.promptCallback;
    state.promptCallback = null;
    cb(vals);
  }
}

// ============================================
// 19. الملفات (تخزين/عرض)
// ============================================
const MAX_FILE_SIZE = 200 * 1024 * 1024;

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
    return null;
  }
  if (file.size > MAX_FILE_SIZE) {
    showToast(t('file_too_large'));
    return null;
  }
  const id = 'f_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
  const meta = {
    id, name: file.name, type, mime: file.type, size: file.size,
    addedAt: Date.now(), favorite: false, completed: false,
    notes: '', progress: 0, lastPosition: 0,
  };
  if (type === 'image') {
    try { meta.thumbnail = await generateThumbnail(file); } catch {}
  }
  await dbPut(STORE_BLOBS, { id, blob: file });
  await dbPut(STORE_FILES, meta);
  state.files.unshift(meta);
  renderFiles();
  refreshHome();
  showToast(t('file_added'));
  return meta;
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

function fileItemHTML(file) {
  let thumb = '';
  if (file.type === 'image' && file.thumbnail) thumb = `<img src="${file.thumbnail}" alt="" />`;
  else thumb = file.type.toUpperCase();
  return `
    <div class="file-item" data-id="${file.id}" tabindex="0" role="button">
      <div class="file-thumb ${file.type}">${thumb}</div>
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
        ${file.favorite ? `<span class="file-badge fav"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></span>` : ''}
        ${file.completed ? `<span class="file-badge complete"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>` : ''}
      </div>
    </div>
  `;
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

function renderFiles() {
  const list = document.getElementById('files-list');
  const empty = document.getElementById('files-empty');
  if (!list) return;
  let filtered = state.files;
  if (state.filters.type !== 'all') filtered = filtered.filter(f => f.type === state.filters.type);
  if (state.filters.search) {
    const q = state.filters.search.toLowerCase();
    filtered = filtered.filter(f =>
      f.name.toLowerCase().includes(q) || (f.notes && f.notes.toLowerCase().includes(q)));
  }
  if (filtered.length === 0) { list.innerHTML = ''; empty.classList.remove('hidden'); }
  else {
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
  if (!list) return;
  const favs = state.files.filter(f => f.favorite);
  if (favs.length === 0) { list.innerHTML = ''; empty.classList.remove('hidden'); }
  else {
    empty.classList.add('hidden');
    list.innerHTML = favs.map(fileItemHTML).join('');
    list.querySelectorAll('.file-item').forEach(el => {
      el.addEventListener('click', () => openViewer(el.dataset.id));
    });
  }
}

// ============================================
// 20. عارض الملفات
// ============================================
let currentBlobUrl = null;

async function openViewer(id) {
  const file = state.files.find(f => f.id === id);
  if (!file) return;
  state.currentFile = file;
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

  const blobData = await dbGet(STORE_BLOBS, id);
  if (!blobData) { showToast(t('invalid_file')); return; }
  if (currentBlobUrl) URL.revokeObjectURL(currentBlobUrl);
  currentBlobUrl = URL.createObjectURL(blobData.blob);

  pdfToolbar.classList.add('hidden');
  videoToolbar.classList.add('hidden');
  ttsBtn.classList.add('hidden');

  if (file.type === 'pdf') {
    pdfToolbar.classList.remove('hidden');
    state.pdfZoom = 1;
    updateZoomDisplay();
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const openLabel = state.language === 'ar' ? 'افتح PDF في تبويب جديد' : 'Open PDF in new tab';
    const iosNote = state.language === 'ar'
      ? 'لتصفح كامل صفحات الملف على الآيفون، اضغط الزر أعلاه'
      : 'Tap the button above to browse all pages on iOS';
    content.innerHTML = `
      <div class="pdf-wrapper" id="pdf-wrapper">
        <div class="pdf-open-bar">
          <a class="btn btn-primary" id="pdf-open-tab" href="${currentBlobUrl}" target="_blank" rel="noopener">⤴ ${escapeHtml(openLabel)}</a>
          ${isIOS ? `<div class="pdf-ios-hint">${escapeHtml(iosNote)}</div>` : ''}
        </div>
        <div class="pdf-frame-wrapper" id="pdf-frame-wrapper">
          <object data="${currentBlobUrl}#view=FitH" type="application/pdf" width="100%" height="100%">
            <embed src="${currentBlobUrl}#view=FitH" type="application/pdf" width="100%" height="100%" />
          </object>
        </div>
      </div>
    `;
  } else if (file.type === 'image') {
    pdfToolbar.classList.remove('hidden');
    state.pdfZoom = 1;
    updateZoomDisplay();
    content.innerHTML = `<div class="image-wrapper"><img id="viewer-image" src="${currentBlobUrl}" alt="${escapeHtml(file.name)}" /></div>`;
  } else if (file.type === 'video') {
    videoToolbar.classList.remove('hidden');
    const startTime = file.lastPosition || 0;
    content.innerHTML = `<video id="viewer-video" controls playsinline src="${currentBlobUrl}"></video>`;
    const video = document.getElementById('viewer-video');
    video.addEventListener('loadedmetadata', () => {
      if (startTime > 0 && startTime < video.duration - 5) video.currentTime = startTime;
      video.playbackRate = state.videoSpeed;
    });
    video.addEventListener('timeupdate', () => {
      file.lastPosition = video.currentTime;
      if (Math.floor(video.currentTime) % 5 === 0) dbPut(STORE_FILES, file).catch(() => {});
    });
    document.querySelectorAll('.speed-btn').forEach(b => {
      b.classList.toggle('active', parseFloat(b.dataset.speed) === state.videoSpeed);
    });
  }

  ttsBtn.classList.remove('hidden');
  document.getElementById('viewer-fav').classList.toggle('active', file.favorite);
  document.getElementById('viewer-complete').classList.toggle('active', file.completed);
  document.getElementById('notes-textarea').value = file.notes || '';
  modal.classList.remove('hidden');
}

function closeViewer() {
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  const video = document.getElementById('viewer-video');
  if (video && state.currentFile) {
    state.currentFile.lastPosition = video.currentTime;
    dbPut(STORE_FILES, state.currentFile).catch(() => {});
  }
  document.getElementById('viewer-modal').classList.add('hidden');
  document.getElementById('notes-panel').classList.add('hidden');
  if (currentBlobUrl) { URL.revokeObjectURL(currentBlobUrl); currentBlobUrl = null; }
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
// 21. الملاحظات
// ============================================
function toggleNotes() {
  const panel = document.getElementById('notes-panel');
  panel.classList.toggle('hidden');
  if (!panel.classList.contains('hidden')) {
    document.getElementById('notes-textarea').focus();
    updateNotesMeta();
  }
}

function updateNotesMeta() {
  const text = document.getElementById('notes-textarea').value;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const chars = text.length;
  const meta = document.getElementById('notes-meta');
  meta.textContent = state.language === 'ar' ? `${words} كلمة · ${chars} حرف` : `${words} words · ${chars} chars`;
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

function toggleTTS() {
  if (!('speechSynthesis' in window)) { showToast('TTS not supported'); return; }
  if (speechSynthesis.speaking) { speechSynthesis.cancel(); return; }
  const text = document.getElementById('notes-textarea').value || state.currentFile?.name;
  if (!text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = state.language === 'ar' ? 'ar-SA' : 'en-US';
  utterance.rate = 0.95;
  speechSynthesis.speak(utterance);
}

// ============================================
// 22. المؤقت (قابل للتعديل)
// ============================================
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function updatePomodoroDisplay() {
  document.getElementById('pomodoro-display').textContent = formatTime(state.pomodoro.remaining);
  document.getElementById('pomodoro-mode').textContent = t(state.pomodoro.mode);
  const valEl = document.getElementById('timer-value');
  if (valEl) valEl.textContent = state.pomodoro.customMinutes;
}

function startPomodoro() {
  if (state.pomodoro.running) return;
  state.pomodoro.running = true;
  document.getElementById('pomodoro-start').classList.add('hidden');
  document.getElementById('pomodoro-pause').classList.remove('hidden');
  state.pomodoro.interval = setInterval(() => {
    state.pomodoro.remaining--;
    updatePomodoroDisplay();
    if (state.pomodoro.remaining <= 0) finishPomodoro();
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
  playBeep();
  resetPomodoro();
  refreshHome();
}

function setTimerMinutes(minutes) {
  minutes = Math.max(1, Math.min(180, minutes));
  state.pomodoro.customMinutes = minutes;
  state.pomodoro.duration = minutes * 60;
  state.pomodoro.remaining = minutes * 60;
  localStorage.setItem(STORAGE_KEYS.TIMER_MIN, String(minutes));
  updatePomodoroDisplay();
}

function setPomodoroMode(duration, mode) {
  pausePomodoro();
  state.pomodoro.mode = mode;
  setTimerMinutes(duration);
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
// 23. إحصائيات / مهام
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
  Object.keys(all).forEach(d => {
    if (Date.now() - new Date(d).getTime() > 30 * 24 * 60 * 60 * 1000) delete all[d];
  });
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(all));
}

function renderTasks() {
  const tasks = getTasks();
  const list = document.getElementById('tasks-list');
  const empty = document.getElementById('tasks-empty');
  if (tasks.length === 0) { list.innerHTML = ''; empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  list.innerHTML = tasks.map((tk, i) => `
    <div class="task-item">
      <div class="task-checkbox ${tk.done ? 'checked' : ''}" data-i="${i}" role="checkbox" aria-checked="${tk.done}"></div>
      <div class="task-text ${tk.done ? 'done' : ''}">${escapeHtml(tk.text)}</div>
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
// 24. تحديث الواجهة
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
  updateRepNotifCard();
}

async function refreshSettings() {
  const stats = getStats();
  document.getElementById('stat-sessions').textContent = stats.sessions || 0;
  document.getElementById('stat-minutes').textContent = Math.floor(stats.minutes || 0);
  let total = 0;
  for (const f of state.files) total += f.size;
  document.getElementById('stat-storage').textContent = formatSize(total);
}

function refreshAll() {
  applyLanguage();
  applyTheme();
  applyRoleUI();
  refreshHome();
  renderFiles();
  renderFavorites();
  refreshSettings();
  if (state.currentPage === 'subjects') renderSubjectsPage();
  if (state.currentPage === 'schedule') renderSchedulePage();
}

// ============================================
// 25. Toast والإشعارات
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
  try { new Notification('StudyApp', { body: message, icon: 'icon-192.png' }); } catch {}
}

// ============================================
// 26. PWA & Service Worker
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
// 27. مستمعات الأحداث
// ============================================
function setupEventListeners() {
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

  // إعداد البروفايل
  document.getElementById('profile-pic-btn').addEventListener('click', () => {
    document.getElementById('profile-pic-input').click();
  });
  document.getElementById('profile-pic-input').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const dataUrl = await readImageAsDataUrl(file);
      setProfilePreview(dataUrl);
    } catch { showToast(t('invalid_file')); }
  });
  document.getElementById('profile-save-btn').addEventListener('click', saveProfileFromForm);
  document.getElementById('edit-profile-btn').addEventListener('click', () => {
    showProfileSetup(true);
  });

  // كود التفعيل
  document.getElementById('activation-btn').addEventListener('click', () => {
    const code = document.getElementById('activation-input').value;
    if (tryActivateCode(code)) {
      document.getElementById('activation-input').value = '';
    }
  });
  document.getElementById('activation-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('activation-btn').click();
  });
  document.getElementById('logout-role-btn').addEventListener('click', logoutRole);
  // فتح اللوحات
  document.getElementById('open-admin-btn').addEventListener('click', openAdminPanel);
  document.getElementById('open-rep-btn').addEventListener('click', openRepPanel);
  document.getElementById('admin-close').addEventListener('click', closeAdminPanel);
  document.getElementById('rep-close').addEventListener('click', closeRepPanel);
  document.querySelectorAll('#admin-modal .admin-tab').forEach(t => {
    t.addEventListener('click', () => switchAdminTab(t.dataset.tab));
  });
  document.querySelectorAll('#rep-modal .admin-tab').forEach(t => {
    t.addEventListener('click', () => switchRepTab(t.dataset.tab));
  });

  // Prompt modal
  document.getElementById('prompt-cancel').addEventListener('click', () => {
    document.getElementById('prompt-modal').classList.add('hidden');
    state.promptCallback = null;
  });
  document.getElementById('prompt-save').addEventListener('click', submitPrompt);
  ['prompt-input','prompt-input2','prompt-input3','prompt-input4'].forEach(id => {
    document.getElementById(id).addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submitPrompt();
    });
  });

  // Subject modal close
  document.getElementById('subject-close').addEventListener('click', () => {
    document.getElementById('subject-modal').classList.add('hidden');
    state.currentSubject = null;
  });

  // Member modal
  document.getElementById('member-modal-close').addEventListener('click', () => {
    document.getElementById('member-modal').classList.add('hidden');
  });

  // رفع الملفات
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');
  dropZone.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', async (e) => {
    for (const file of e.target.files) await uploadFile(file);
    fileInput.value = '';
  });
  ['dragenter','dragover'].forEach(ev => {
    dropZone.addEventListener(ev, (e) => { e.preventDefault(); dropZone.classList.add('dragover'); });
  });
  ['dragleave','drop'].forEach(ev => {
    dropZone.addEventListener(ev, (e) => { e.preventDefault(); dropZone.classList.remove('dragover'); });
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
  document.getElementById('viewer-fav').addEventListener('click', () => { if (state.currentFile) toggleFavorite(state.currentFile.id); });
  document.getElementById('viewer-complete').addEventListener('click', () => { if (state.currentFile) toggleComplete(state.currentFile.id); });
  document.getElementById('viewer-notes').addEventListener('click', toggleNotes);
  document.getElementById('viewer-tts').addEventListener('click', toggleTTS);
  document.getElementById('notes-close').addEventListener('click', toggleNotes);
  document.getElementById('notes-textarea').addEventListener('input', onNotesInput);

  // الزووم
  document.getElementById('zoom-in').addEventListener('click', () => {
    state.pdfZoom = Math.min(state.pdfZoom + 0.25, 3); updateZoomDisplay();
  });
  document.getElementById('zoom-out').addEventListener('click', () => {
    state.pdfZoom = Math.max(state.pdfZoom - 0.25, 0.5); updateZoomDisplay();
  });

  // سرعة الفيديو
  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.addEventListener('click', () => changeVideoSpeed(parseFloat(btn.dataset.speed)));
  });

  // المؤقت
  document.getElementById('pomodoro-start').addEventListener('click', startPomodoro);
  document.getElementById('pomodoro-pause').addEventListener('click', pausePomodoro);
  document.getElementById('pomodoro-reset').addEventListener('click', resetPomodoro);
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => setPomodoroMode(parseInt(btn.dataset.duration), btn.dataset.mode));
  });
  document.getElementById('timer-minus').addEventListener('click', () => {
    if (state.pomodoro.running) return;
    setTimerMinutes(state.pomodoro.customMinutes - 5);
  });
  document.getElementById('timer-plus').addEventListener('click', () => {
    if (state.pomodoro.running) return;
    setTimerMinutes(state.pomodoro.customMinutes + 5);
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
    await dbClear(STORE_MATERIALS);
    Object.values(STORAGE_KEYS).forEach(k => {
      if (k !== STORAGE_KEYS.LANG && k !== STORAGE_KEYS.THEME) localStorage.removeItem(k);
    });
    state.files = []; state.profile = null; state.role = { kind:'guest', sectionId:null };
    state.structure = { stages: [] }; state.members = []; state.subjects = {}; state.schedule = {}; state.notifs = {};
    showToast(state.language === 'ar' ? 'تم مسح البيانات' : 'Data cleared');
    setTimeout(() => location.reload(), 800);
  });

  // تثبيت
  document.getElementById('install-btn').addEventListener('click', async () => {
    if (!state.installPromptEvent) return;
    state.installPromptEvent.prompt();
    const { outcome } = await state.installPromptEvent.userChoice;
    if (outcome === 'accepted') document.getElementById('install-prompt').classList.add('hidden');
    state.installPromptEvent = null;
  });
  document.getElementById('install-dismiss').addEventListener('click', () => {
    document.getElementById('install-prompt').classList.add('hidden');
    localStorage.setItem('install_dismissed', '1');
  });

  // ESC
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!document.getElementById('viewer-modal').classList.contains('hidden')) closeViewer();
    if (!document.getElementById('admin-modal').classList.contains('hidden')) closeAdminPanel();
    if (!document.getElementById('rep-modal').classList.contains('hidden')) closeRepPanel();
    if (!document.getElementById('prompt-modal').classList.contains('hidden')) {
      document.getElementById('prompt-modal').classList.add('hidden');
      state.promptCallback = null;
    }
    if (!document.getElementById('subject-modal').classList.contains('hidden')) {
      document.getElementById('subject-modal').classList.add('hidden');
      state.currentSubject = null;
    }
    if (!document.getElementById('member-modal').classList.contains('hidden')) {
      document.getElementById('member-modal').classList.add('hidden');
    }
  });
}

// ============================================
// 28. التهيئة الأولية
// ============================================
function showApp() {
  document.getElementById('app').classList.remove('hidden');
  refreshAll();
}

async function init() {
  // تحميل التفضيلات
  state.language = localStorage.getItem(STORAGE_KEYS.LANG) || 'ar';
  state.theme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
  state.notifications = localStorage.getItem(STORAGE_KEYS.NOTIF) === '1';
  // تحميل البيانات
  loadProfile();
  loadRole();
  loadStructure();
  loadMembers();
  loadSubjects();
  loadSchedule();
  loadNotifs();
  // المؤقت
  const savedMin = parseInt(localStorage.getItem(STORAGE_KEYS.TIMER_MIN) || '25');
  state.pomodoro.customMinutes = isNaN(savedMin) ? 25 : savedMin;
  state.pomodoro.duration = state.pomodoro.customMinutes * 60;
  state.pomodoro.remaining = state.pomodoro.customMinutes * 60;

  await openDB();
  await loadFiles();
  applyLanguage();
  applyTheme();
  setupEventListeners();

  // إخفاء الـ splash بعد 800ms
  setTimeout(() => {
    document.getElementById('splash-screen').classList.add('hidden');
    if (!state.profile || !state.profile.name) {
      showProfileSetup(false);
    } else {
      showApp();
    }
  }, 800);
}

document.addEventListener('DOMContentLoaded', init);
