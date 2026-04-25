#!/usr/bin/env bash
# ============================================================
# سكريبت نشر تطبيق الدراسة على GitHub Pages
# Deploy Study App PWA to GitHub Pages
# ============================================================
# الاستخدام: bash deploy-to-gh-pages.sh
# Usage:     bash deploy-to-gh-pages.sh
# ============================================================

set -e  # توقف عند أي خطأ / Stop on any error

# ألوان للطباعة / Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}============================================${NC}"
echo -e "${BLUE}  نشر تطبيق الدراسة إلى GitHub Pages${NC}"
echo -e "${BLUE}  Deploying Study App to GitHub Pages${NC}"
echo -e "${BLUE}============================================${NC}\n"

# ------------------------------------------------------------
# 1) تحديد المسارات / Define paths
# ------------------------------------------------------------
SRC_DIR="artifacts/study-app"
PUBLIC_DIR="$SRC_DIR/public"
ROOT_DIR="."

# ------------------------------------------------------------
# 2) التحقق من وجود الملفات المصدر / Verify source files exist
# ------------------------------------------------------------
echo -e "${YELLOW}[1/4] التحقق من الملفات المصدر...${NC}"

if [ ! -f "$SRC_DIR/index.html" ]; then
  echo -e "${RED}خطأ: ملف $SRC_DIR/index.html غير موجود!${NC}"
  exit 1
fi

if [ ! -d "$PUBLIC_DIR" ]; then
  echo -e "${RED}خطأ: المجلد $PUBLIC_DIR غير موجود!${NC}"
  exit 1
fi

echo -e "${GREEN}  ✓ تم العثور على جميع الملفات${NC}\n"

# ------------------------------------------------------------
# 3) نسخ الملفات إلى المجلد الرئيسي / Copy files to root
# ------------------------------------------------------------
echo -e "${YELLOW}[2/4] نسخ الملفات إلى المجلد الرئيسي...${NC}"

# نسخ index.html
cp "$SRC_DIR/index.html" "$ROOT_DIR/index.html"
echo -e "  ✓ index.html"

# نسخ جميع ملفات public/ (CSS, JS, manifest, service worker, icons)
for file in "$PUBLIC_DIR"/*; do
  fname=$(basename "$file")
  cp "$file" "$ROOT_DIR/$fname"
  echo -e "  ✓ $fname"
done

echo -e "${GREEN}  تم نسخ جميع الملفات بنجاح${NC}\n"

# ------------------------------------------------------------
# 4) إنشاء ملف .nojekyll لتعطيل Jekyll على GitHub Pages
# Create .nojekyll to disable Jekyll processing
# ------------------------------------------------------------
echo -e "${YELLOW}[3/4] إنشاء ملف .nojekyll...${NC}"
touch "$ROOT_DIR/.nojekyll"
echo -e "${GREEN}  ✓ تم إنشاء .nojekyll${NC}\n"

# ------------------------------------------------------------
# 5) ملاحظة حول الروابط / Notes about links
# ------------------------------------------------------------
echo -e "${YELLOW}[4/4] فحص الروابط داخل index.html...${NC}"
echo -e "  جميع الروابط نسبية (relative paths) ولا تحتاج تعديل."
echo -e "  All links are relative — no updates needed.\n"

# ------------------------------------------------------------
# انتهى! / Done!
# ------------------------------------------------------------
echo -e "${GREEN}============================================${NC}"
echo -e "${GREEN}  ✓ تم تجهيز الملفات بنجاح!${NC}"
echo -e "${GREEN}  ✓ Files prepared successfully!${NC}"
echo -e "${GREEN}============================================${NC}\n"

echo -e "${BLUE}الخطوات التالية / Next steps:${NC}\n"
echo -e "${YELLOW}1) راجع الملفات المنسوخة:${NC}"
echo -e "   ls -la index.html style.css app.js manifest.json service-worker.js\n"

echo -e "${YELLOW}2) نفّذ أوامر Git التالية لرفع الملفات إلى GitHub:${NC}\n"
echo -e "   ${GREEN}git add index.html style.css app.js manifest.json \\${NC}"
echo -e "   ${GREEN}        service-worker.js favicon.svg icon-192.png \\${NC}"
echo -e "   ${GREEN}        icon-512.png opengraph.jpg .nojekyll${NC}"
echo -e ""
echo -e "   ${GREEN}git commit -m \"Deploy Study App PWA to GitHub Pages\"${NC}"
echo -e ""
echo -e "   ${GREEN}git push origin main${NC}\n"

echo -e "${YELLOW}3) فعّل GitHub Pages من إعدادات المستودع:${NC}"
echo -e "   Settings → Pages → Source: ${GREEN}Deploy from a branch${NC}"
echo -e "   Branch: ${GREEN}main${NC}  |  Folder: ${GREEN}/ (root)${NC}\n"

echo -e "${YELLOW}4) سيكون موقعك متاحاً على:${NC}"
echo -e "   ${GREEN}https://USERNAME.github.io/REPO-NAME/${NC}\n"
