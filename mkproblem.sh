mkdir "$1"

DENO_TEST_IMPORT="import {assertEquals} from 'https://deno.land/std@0.189.0/testing/asserts.ts'\n\nDeno.test('All tests', () => {})"

if [ $? -eq 1 ]
then
  exit 1
fi

cd "$1" || exit

touch main.ts
printf "$DENO_TEST_IMPORT" > main.test.ts